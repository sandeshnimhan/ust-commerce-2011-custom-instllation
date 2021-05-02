/*
 * Copyright (c) 2019 SAP SE or an SAP affiliate company. All rights reserved.
 */
package de.hybris.eventtracking.publisher.listeners;

import de.hybris.eventtracking.model.events.AbstractTrackingEvent;
import de.hybris.eventtracking.publisher.csv.model.TrackingEventCsvData;
import de.hybris.platform.servicelayer.dto.converter.ConversionException;
import de.hybris.platform.servicelayer.dto.converter.Converter;
import de.hybris.platform.servicelayer.event.impl.AbstractEventListener;

import java.util.List;

import org.apache.commons.lang.builder.ToStringBuilder;
import org.apache.log4j.Logger;
import org.springframework.messaging.Message;
import org.springframework.messaging.MessageChannel;
import org.springframework.messaging.support.GenericMessage;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.dataformat.csv.CsvMapper;
import com.fasterxml.jackson.dataformat.csv.CsvSchema;
import com.fasterxml.jackson.dataformat.csv.CsvSchema.Builder;


/**
 * @author stevo.slavic
 *
 */
public class TrackingEventPublishingListener extends AbstractEventListener<AbstractTrackingEvent>
{

	private static final Logger LOG = Logger.getLogger(TrackingEventPublishingListener.class);

	private final MessageChannel trackingEventCsvPublishChannel;

	private final CsvMapper mapper;

	private final CsvSchema schema;

	private final Converter<AbstractTrackingEvent, TrackingEventCsvData> converter;

	public TrackingEventPublishingListener(final MessageChannel trackingEventCsvPublishChannel, final CsvMapper mapper,
			final List<String> trackingEventCsvOrderedFields, final Converter<AbstractTrackingEvent, TrackingEventCsvData> converter)
	{
		
		this.trackingEventCsvPublishChannel = trackingEventCsvPublishChannel;
		this.mapper = mapper;
		final Builder csvSchemaBuilder = CsvSchema.builder();
		
		for (final String trackingEventCsvOrderedField : trackingEventCsvOrderedFields)
		{
			csvSchemaBuilder.addColumn(trackingEventCsvOrderedField);
		}
		this.schema = csvSchemaBuilder.build();
		this.converter = converter;
	}

	/**
	 * @see de.hybris.platform.servicelayer.event.impl.AbstractEventListener#onEvent(de.hybris.platform.servicelayer.event
	 *      .events.AbstractEvent)
	 */
	@Override
	protected void onEvent(final AbstractTrackingEvent event)
	{
		if (LOG.isDebugEnabled())
		{
			LOG.debug("Received tracking event for publishing: " + ToStringBuilder.reflectionToString(event));
		}

		try
		{
			final TrackingEventCsvData eventCsvData = convertEventToCsvDataModel(event);
			final String eventCsvString = serializeEventCsvDataModelToString(eventCsvData);
			publishEventCsvStringToSpringIntegrationChannel(eventCsvString);
		}
		catch (ConversionException e)
		{
			LOG.error("Error converting tracking event '" + ToStringBuilder.reflectionToString(event) + "' to CSV data model", e);
		}
		catch (JsonProcessingException e)
		{
			LOG.error("Error mapping tracking event data to CSV string", e);
		}

	}

	/**
	 * @param eventCsvString
	 */
	private void publishEventCsvStringToSpringIntegrationChannel(final String eventCsvString)
	{
		final Message<String> message = new GenericMessage<String>(eventCsvString);
		final boolean success = trackingEventCsvPublishChannel.send(message);
		if (!success)
		{
			LOG.error("Sending tracking event CSV '" + eventCsvString
					+ "' to trackingEventCsvPublishChannel failed. Queue is likely full.");
		}
		else
		{
			if (LOG.isDebugEnabled())
			{
				LOG.debug("Published tracking event as CSV to trackingEventCsvPublishChannel");
			}
		}
	}

	/**
	 * @param eventCsvData
	 *           event CSV data model
	 * @return event as CSV string
	 */
	private String serializeEventCsvDataModelToString(final TrackingEventCsvData eventCsvData) throws JsonProcessingException {
		return mapper.writer(schema).writeValueAsString(eventCsvData);
	}

	/**
	 * @param event
	 *           tracking event
	 * @return event CSV data model
	 */
	private TrackingEventCsvData convertEventToCsvDataModel(final AbstractTrackingEvent event)
	{
		return converter.convert(event);
	}
}
