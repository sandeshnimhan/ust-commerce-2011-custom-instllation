/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 */
package de.hybris.platform.adaptivesearch.integration.synchronization;

import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;

import de.hybris.bootstrap.annotations.IntegrationTest;
import de.hybris.platform.adaptivesearch.enums.AsFacetType;
import de.hybris.platform.adaptivesearch.model.AbstractAsConfigurableSearchConfigurationModel;
import de.hybris.platform.adaptivesearch.model.AbstractAsFacetConfigurationModel;
import de.hybris.platform.adaptivesearch.model.AsExcludedFacetModel;
import de.hybris.platform.adaptivesearch.model.AsExcludedFacetValueModel;
import de.hybris.platform.adaptivesearch.model.AsPromotedFacetValueModel;
import de.hybris.platform.adaptivesearch.services.AsConfigurationService;
import de.hybris.platform.adaptivesearch.services.AsSearchConfigurationService;
import de.hybris.platform.adaptivesearch.services.AsSearchProfileService;
import de.hybris.platform.catalog.CatalogVersionService;
import de.hybris.platform.catalog.model.CatalogVersionModel;
import de.hybris.platform.catalog.synchronization.CatalogSynchronizationService;
import de.hybris.platform.impex.jalo.ImpExException;
import de.hybris.platform.servicelayer.model.ModelService;

import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.Optional;

import javax.annotation.Resource;

import org.junit.Before;
import org.junit.Rule;
import org.junit.Test;
import org.junit.rules.ExpectedException;


@IntegrationTest
public class AsExcludedFacetSynchronizationTest extends AbstractAsSynchronizationTest
{
	private static final String CATALOG_ID = "hwcatalog";
	private static final String VERSION_STAGED = "Staged";
	private static final String VERSION_ONLINE = "Online";

	private static final String SEARCH_CONFIGURATION_UID = "searchConfiguration";

	private static final String UID1 = "cde588ec-d453-48bd-a3b1-b9aa00402256";

	private static final String INDEX_PROPERTY1 = "property1";

	private static final String VALUE1 = "value1";
	private static final String VALUE2 = "value2";

	@Rule
	public ExpectedException expectedException = ExpectedException.none();

	@Resource
	private ModelService modelService;

	@Resource
	private CatalogVersionService catalogVersionService;

	@Resource
	private CatalogSynchronizationService catalogSynchronizationService;

	@Resource
	private AsSearchProfileService asSearchProfileService;

	@Resource
	private AsSearchConfigurationService asSearchConfigurationService;

	@Resource
	private AsConfigurationService asConfigurationService;

	private CatalogVersionModel onlineCatalogVersion;
	private CatalogVersionModel stagedCatalogVersion;
	private AbstractAsConfigurableSearchConfigurationModel searchConfiguration;

	@Before
	public void setUp() throws ImpExException
	{
		importCsv("/adaptivesearch/test/integration/asBase.impex", StandardCharsets.UTF_8.name());
		importCsv("/adaptivesearch/test/integration/asSimpleSearchProfile.impex", StandardCharsets.UTF_8.name());
		importCsv("/adaptivesearch/test/integration/asSimpleSearchConfiguration.impex", StandardCharsets.UTF_8.name());

		stagedCatalogVersion = catalogVersionService.getCatalogVersion(CATALOG_ID, VERSION_STAGED);
		onlineCatalogVersion = catalogVersionService.getCatalogVersion(CATALOG_ID, VERSION_ONLINE);

		final Optional<AbstractAsConfigurableSearchConfigurationModel> searchConfigurationOptional = asSearchConfigurationService
				.getSearchConfigurationForUid(stagedCatalogVersion, SEARCH_CONFIGURATION_UID);
		searchConfiguration = searchConfigurationOptional.orElseThrow();
	}

	@Test
	public void excludedFacetNotFoundBeforeSynchronization()
	{
		// given
		final AsExcludedFacetModel excludedFacet = asConfigurationService.createConfiguration(AsExcludedFacetModel.class);
		excludedFacet.setCatalogVersion(stagedCatalogVersion);
		excludedFacet.setUid(UID1);
		excludedFacet.setSearchConfiguration(searchConfiguration);
		excludedFacet.setIndexProperty(INDEX_PROPERTY1);
		excludedFacet.setFacetType(AsFacetType.REFINE);

		// when
		asConfigurationService.saveConfiguration(excludedFacet);

		final Optional<AsExcludedFacetModel> synchronizedExcludedFacetOptional = asConfigurationService
				.getConfigurationForUid(AsExcludedFacetModel.class, onlineCatalogVersion, UID1);

		// then
		assertFalse(synchronizedExcludedFacetOptional.isPresent());
	}

	@Test
	public void synchronizeNewExcludedFacet()
	{
		// given
		final AsExcludedFacetModel excludedFacet = asConfigurationService.createConfiguration(AsExcludedFacetModel.class);
		excludedFacet.setCatalogVersion(stagedCatalogVersion);
		excludedFacet.setUid(UID1);
		excludedFacet.setSearchConfiguration(searchConfiguration);
		excludedFacet.setIndexProperty(INDEX_PROPERTY1);
		excludedFacet.setFacetType(AsFacetType.REFINE);

		final AsPromotedFacetValueModel promotedValue = asConfigurationService.createConfiguration(AsPromotedFacetValueModel.class);
		promotedValue.setCatalogVersion(stagedCatalogVersion);
		promotedValue.setFacetConfiguration(excludedFacet);
		promotedValue.setValue(VALUE2);

		final AsExcludedFacetValueModel excludedValue = asConfigurationService.createConfiguration(AsExcludedFacetValueModel.class);
		excludedValue.setCatalogVersion(stagedCatalogVersion);
		excludedValue.setFacetConfiguration(excludedFacet);
		excludedValue.setValue(VALUE1);

		// when
		asConfigurationService.saveConfiguration(excludedFacet);
		asConfigurationService.saveConfiguration(promotedValue);
		asConfigurationService.saveConfiguration(excludedValue);
		asConfigurationService.refreshConfiguration(excludedFacet);

		catalogSynchronizationService.synchronizeFully(stagedCatalogVersion, onlineCatalogVersion);

		final Optional<AsExcludedFacetModel> synchronizedExcludedFacetOptional = asConfigurationService
				.getConfigurationForUid(AsExcludedFacetModel.class, onlineCatalogVersion, UID1);

		// then
		assertTrue(synchronizedExcludedFacetOptional.isPresent());

		final AsExcludedFacetModel synchronizedExcludedFacet = synchronizedExcludedFacetOptional.orElseThrow();
		assertFalse(synchronizedExcludedFacet.isCorrupted());
		assertSynchronized(excludedFacet, synchronizedExcludedFacet, AbstractAsFacetConfigurationModel.UNIQUEIDX);
	}

	@Test
	public void synchronizeUpdatedExcludedFacet()
	{
		// given
		final AsExcludedFacetModel excludedFacet = asConfigurationService.createConfiguration(AsExcludedFacetModel.class);
		excludedFacet.setCatalogVersion(stagedCatalogVersion);
		excludedFacet.setUid(UID1);
		excludedFacet.setSearchConfiguration(searchConfiguration);
		excludedFacet.setIndexProperty(INDEX_PROPERTY1);
		excludedFacet.setFacetType(AsFacetType.REFINE);

		final AsPromotedFacetValueModel promotedValue = asConfigurationService.createConfiguration(AsPromotedFacetValueModel.class);
		promotedValue.setCatalogVersion(stagedCatalogVersion);
		promotedValue.setFacetConfiguration(excludedFacet);
		promotedValue.setValue(VALUE2);

		final AsExcludedFacetValueModel excludedValue = asConfigurationService.createConfiguration(AsExcludedFacetValueModel.class);
		excludedValue.setCatalogVersion(stagedCatalogVersion);
		excludedValue.setFacetConfiguration(excludedFacet);
		excludedValue.setValue(VALUE1);

		// when
		asConfigurationService.saveConfiguration(excludedFacet);
		asConfigurationService.saveConfiguration(promotedValue);
		asConfigurationService.saveConfiguration(excludedValue);
		asConfigurationService.refreshConfiguration(excludedFacet);

		catalogSynchronizationService.synchronizeFully(stagedCatalogVersion, onlineCatalogVersion);

		excludedFacet.setFacetType(AsFacetType.MULTISELECT_OR);
		excludedFacet.setPromotedValues(new ArrayList<>());
		excludedFacet.setExcludedValues(new ArrayList<>());

		asConfigurationService.saveConfiguration(excludedFacet);
		modelService.refresh(excludedFacet);

		catalogSynchronizationService.synchronizeFully(stagedCatalogVersion, onlineCatalogVersion);

		final Optional<AsExcludedFacetModel> synchronizedExcludedFacetOptional = asConfigurationService
				.getConfigurationForUid(AsExcludedFacetModel.class, onlineCatalogVersion, UID1);

		// then
		assertTrue(synchronizedExcludedFacetOptional.isPresent());

		final AsExcludedFacetModel synchronizedExcludedFacet = synchronizedExcludedFacetOptional.orElseThrow();
		assertFalse(synchronizedExcludedFacet.isCorrupted());
		assertSynchronized(excludedFacet, synchronizedExcludedFacet, AbstractAsFacetConfigurationModel.UNIQUEIDX);
	}

	@Test
	public void synchronizeRemovedExcludedFacet()
	{
		// given
		final AsExcludedFacetModel excludedFacet = asConfigurationService.createConfiguration(AsExcludedFacetModel.class);
		excludedFacet.setCatalogVersion(stagedCatalogVersion);
		excludedFacet.setUid(UID1);
		excludedFacet.setSearchConfiguration(searchConfiguration);
		excludedFacet.setIndexProperty(INDEX_PROPERTY1);
		excludedFacet.setFacetType(AsFacetType.REFINE);

		// when
		asConfigurationService.saveConfiguration(excludedFacet);
		modelService.refresh(excludedFacet);

		catalogSynchronizationService.synchronizeFully(stagedCatalogVersion, onlineCatalogVersion);

		asConfigurationService.removeConfiguration(excludedFacet);

		catalogSynchronizationService.synchronizeFully(stagedCatalogVersion, onlineCatalogVersion);

		final Optional<AsExcludedFacetModel> synchronizedExcludedFacetOptional = asConfigurationService
				.getConfigurationForUid(AsExcludedFacetModel.class, onlineCatalogVersion, UID1);

		// then
		assertFalse(synchronizedExcludedFacetOptional.isPresent());
	}
}
