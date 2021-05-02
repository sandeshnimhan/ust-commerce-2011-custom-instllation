/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 */
package de.hybris.platform.catalog.job.diff.impl;

import de.hybris.platform.catalog.enums.CategoryDifferenceMode;
import de.hybris.platform.catalog.model.CatalogVersionModel;
import de.hybris.platform.catalog.model.CategoryCatalogVersionDifferenceModel;
import de.hybris.platform.catalog.model.CompareCatalogVersionsCronJobModel;
import de.hybris.platform.category.model.CategoryModel;

import org.apache.commons.lang.BooleanUtils;
import org.apache.log4j.Logger;


/**
 * Difference finder for a new categories between two difference {@link CatalogVersionModel}s.
 */
public class NewCategoryCatalogVersionDiffFinder extends AbstractCategoryCatalogVersionDiffFinder
{
	private static final Logger LOG = Logger.getLogger(NewCategoryCatalogVersionDiffFinder.class.getName());

	@Override
	protected CatalogVersionModel getSourceCatalogVersion(final CompareCatalogVersionsCronJobModel model)
	{
		return model.getSourceVersion();
	}

	@Override
	protected CategoryDifferenceMode getCategoryDifferenceMode()
	{
		final CategoryDifferenceMode categoryNew = (CategoryDifferenceMode) enumerationService.getEnumerationValue(
				CategoryDifferenceMode.CATEGORY_NEW.getType(), CategoryDifferenceMode.CATEGORY_NEW.getCode());
		return categoryNew;
	}

	@Override
	protected CatalogVersionModel getTargetCatalogVersion(final CompareCatalogVersionsCronJobModel model)
	{
		return model.getTargetVersion();
	}

	@Override
	public CategoryCatalogVersionDifferenceModel populateDifferenceModel(final CategoryModel srcCategory,
	                                                                     final CategoryModel targetCategory,
	                                                                     final CompareCatalogVersionsCronJobModel model)
	{

		LOG.info("Category " + srcCategory.getCode() + " not found in version: " + model.getTargetVersion().getVersion());

		final CategoryCatalogVersionDifferenceModel differenceModel = modelService
				.create(CategoryCatalogVersionDifferenceModel.class);
		differenceModel.setSourceVersion(model.getSourceVersion());
		differenceModel.setTargetVersion(model.getTargetVersion());
		differenceModel.setCronJob(model);
		differenceModel.setMode(getCategoryDifferenceMode());

		differenceModel.setSourceCategory(srcCategory);
		differenceModel.setTargetCategory(null);

		differenceModel.setDifferenceText("Category " + srcCategory.getCode() + " not found in version: "
				+ model.getTargetVersion().getVersion());

		return differenceModel;
	}

	@Override
	protected boolean shouldProcess(final CompareCatalogVersionsCronJobModel cronJobModel)
	{
		return BooleanUtils.isTrue(cronJobModel.getSearchNewCategories());
	}

}
