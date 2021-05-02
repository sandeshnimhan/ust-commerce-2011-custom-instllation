/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 */
package de.hybris.platform.searchservices.indexer.service.impl;


import de.hybris.platform.cronjob.enums.CronJobResult;
import de.hybris.platform.cronjob.enums.CronJobStatus;
import de.hybris.platform.cronjob.jalo.CronJobProgressTracker;
import de.hybris.platform.searchservices.constants.SearchservicesConstants;
import de.hybris.platform.searchservices.indexer.SnIndexerException;
import de.hybris.platform.searchservices.indexer.service.SnIndexerItemSource;
import de.hybris.platform.searchservices.indexer.service.SnIndexerItemSourceOperation;
import de.hybris.platform.searchservices.indexer.service.SnIndexerRequest;
import de.hybris.platform.searchservices.model.IncrementalSnIndexerCronJobModel;
import de.hybris.platform.searchservices.model.SnIndexTypeModel;
import de.hybris.platform.searchservices.model.SnIndexerItemSourceOperationModel;
import de.hybris.platform.servicelayer.cronjob.JobPerformable;
import de.hybris.platform.servicelayer.cronjob.PerformResult;

import java.text.MessageFormat;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


/**
 * Implementation of {@link JobPerformable} for running indexer operations.
 */
public class IncrementalSnIndexerJob<T extends IncrementalSnIndexerCronJobModel> extends AbstractSnIndexerJob<T>
{
	private static final Logger LOG = LoggerFactory.getLogger(IncrementalSnIndexerJob.class);

	@Override
	public PerformResult perform(final T cronJob)
	{
		LOG.info("Started incremental indexer job");
		final CronJobProgressTracker tracker = new CronJobProgressTracker(modelService.getSource(cronJob));

		final SnIndexTypeModel indexType = cronJob.getIndexType();
		if (indexType == null)
		{
			LOG.error("Error running incremental indexer job, index type not found for cron job '{}'", cronJob.getCode());
			return new PerformResult(CronJobResult.FAILURE, CronJobStatus.FINISHED);
		}

		try
		{
			final Map<String, Object> parameters = buildParameters(cronJob);
			final List<SnIndexerItemSourceOperation> indexerItemSourceOperations = new ArrayList<>();

			for (final SnIndexerItemSourceOperationModel indexerItemSourceOperationModel : cronJob.getIndexerItemSourceOperations())
			{
				final SnIndexerItemSource indexerItemSource = getSnIndexerItemSourceFactory()
						.createItemSource(indexerItemSourceOperationModel.getIndexerItemSource(), parameters);
				final DefaultSnIndexerItemSourceOperation indexerItemSourceOperation = new DefaultSnIndexerItemSourceOperation(
						indexerItemSourceOperationModel.getDocumentOperationType(), indexerItemSource);

				indexerItemSourceOperations.add(indexerItemSourceOperation);
			}

			final SnIndexerRequest indexerRequest = getSnIndexerService().createIncrementalIndexerRequest(indexType.getId(),
					indexerItemSourceOperations);
			getSnIndexerService().index(indexerRequest);

			saveLastSuccessfulStartTime(cronJob);

			tracker.setProgress(Double.valueOf(1));
		}
		catch (final SnIndexerException e)
		{
			LOG.error(MessageFormat.format("Error running incremental indexer job for cron job ''{0}''", cronJob.getCode()), e);
			tracker.close();
			return new PerformResult(CronJobResult.FAILURE, CronJobStatus.FINISHED);
		}

		return new PerformResult(CronJobResult.SUCCESS, CronJobStatus.FINISHED);
	}

	protected Map<String, Object> buildParameters(final T cronJob) throws SnIndexerException
	{
		return Collections.singletonMap(SearchservicesConstants.INDEXER_ITEM_SOURCE_PARAM_START_TIME,
				getLastSuccessfulStartTime(cronJob).orElseThrow(
						() -> new SnIndexerException("The incremental index cronjob cannot retrieve the last successful start time. "
								+ "Please trigger the full index cronjob once to index this index type for the first time.")));
	}
}
