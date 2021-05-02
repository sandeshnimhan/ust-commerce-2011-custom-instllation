/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 */
package de.hybris.platform.personalizationservices.trigger.strategy.impl;

import de.hybris.platform.catalog.CatalogVersionService;
import de.hybris.platform.catalog.model.CatalogVersionModel;
import de.hybris.platform.core.model.user.UserModel;
import de.hybris.platform.personalizationservices.AbstractCxServiceTest;
import de.hybris.platform.personalizationservices.model.CxVariationModel;
import de.hybris.platform.personalizationservices.trigger.strategy.CxTriggerStrategy;
import de.hybris.platform.servicelayer.user.UserService;

import java.util.Collection;
import java.util.Set;
import java.util.stream.Collectors;

import javax.annotation.Resource;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

import com.google.common.collect.Sets;


public class SegmentTriggerStrategyIntegrationTest extends AbstractCxServiceTest
{
	private static final String CUSTOMER_1 = "customer1@hybris.com";
	private static final String CUSTOMER_2 = "customer2@hybris.com";
	private static final String CUSTOMER_3 = "customer3@hybris.com";
	private static final String CUSTOMER_4 = "customer4@hybris.com";
	private static final String CUSTOMER_5 = "customer5@hybris.com";
	private static final String CUSTOMER_6 = "customer6@hybris.com";
	private static final String CUSTOMER_7 = "customer7@hybris.com";
	private static final String CUSTOMER_8 = "customer8@hybris.com";

	private static final String VARIATION_1 = "variation1";
	private static final String VARIATION_2 = "variation2";
	private static final String VARIATION_3 = "variation3";
	private static final String VARIATION_4 = "variation4";
	private static final String VARIATION_5 = "variation5";
	private static final String VARIATION_6 = "variation6";
	private static final String VARIATION_7 = "variation7";
	private static final String VARIATION_8 = "variation8";

	@Resource(name = "cxDefaultSegmentTriggerStrategy")
	private CxTriggerStrategy cxDaoSegmentTriggerStrategy;

	@Resource
	private UserService userService;

	@Resource
	private CatalogVersionService catalogVersionService;

	private CatalogVersionModel catalogVersion;

	@Before
	public void setup()
	{
		catalogVersion = catalogVersionService.getCatalogVersion("testCatalog", "Online");
	}

	@Test
	public void testCustomer1Variations()
	{
		//given
		final UserModel user = userService.getUserForUID(CUSTOMER_1);

		//when
		final Collection<CxVariationModel> variations = cxDaoSegmentTriggerStrategy.getVariations(user, catalogVersion);

		//then
		assertVariations(variations, VARIATION_1, VARIATION_2, VARIATION_3, VARIATION_4);
	}

	@Test
	public void testCustomer2Variations()
	{
		//given
		final UserModel user = userService.getUserForUID(CUSTOMER_2);

		//when
		final Collection<CxVariationModel> variations = cxDaoSegmentTriggerStrategy.getVariations(user, catalogVersion);

		//then
		assertVariations(variations, VARIATION_3, VARIATION_5);
	}

	@Test
	public void testCustomer3Variations()
	{
		//given
		final UserModel user = userService.getUserForUID(CUSTOMER_3);

		//when
		final Collection<CxVariationModel> variations = cxDaoSegmentTriggerStrategy.getVariations(user, catalogVersion);

		//then
		assertVariations(variations, VARIATION_4, VARIATION_5);
	}

	@Test
	public void testCustomer4Variations()
	{
		//given
		final UserModel user = userService.getUserForUID(CUSTOMER_4);

		//when
		final Collection<CxVariationModel> variations = cxDaoSegmentTriggerStrategy.getVariations(user, catalogVersion);

		//then
		assertVariations(variations, VARIATION_1, VARIATION_2, VARIATION_3, VARIATION_4, VARIATION_5, VARIATION_6);
	}

	@Test
	public void testCustomer5Variations()
	{
		//given
		final UserModel user = userService.getUserForUID(CUSTOMER_5);

		//when
		final Collection<CxVariationModel> variations = cxDaoSegmentTriggerStrategy.getVariations(user, catalogVersion);

		//then
		assertVariations(variations, VARIATION_1, VARIATION_2, VARIATION_3, VARIATION_4, VARIATION_5, VARIATION_7);
	}


	@Test
	public void testCustomer6Variations()
	{
		//given
		final UserModel user = userService.getUserForUID(CUSTOMER_6);

		//when
		final Collection<CxVariationModel> variations = cxDaoSegmentTriggerStrategy.getVariations(user, catalogVersion);

		//then
		assertVariations(variations, VARIATION_3, VARIATION_4, VARIATION_5, VARIATION_8);
	}

	@Test
	public void testCustomer7Variations()
	{
		//given
		final UserModel user = userService.getUserForUID(CUSTOMER_7);

		//when
		final Collection<CxVariationModel> variations = cxDaoSegmentTriggerStrategy.getVariations(user, catalogVersion);

		//then
		assertVariations(variations, VARIATION_1, VARIATION_2, VARIATION_3, VARIATION_4, VARIATION_5, VARIATION_6, VARIATION_7,
				VARIATION_8);
	}

	@Test
	public void testCustomer8VariationsLowAffinity()
	{
		//given
		final UserModel user = userService.getUserForUID(CUSTOMER_8);

		//when
		final Collection<CxVariationModel> variations = cxDaoSegmentTriggerStrategy.getVariations(user, catalogVersion);

		//then
		assertVariations(variations, VARIATION_1, VARIATION_2, VARIATION_3, VARIATION_4);
	}

	private void assertVariations(final Collection<CxVariationModel> actual, final String... expected)
	{
		final Set<String> expectedCodes = Sets.newHashSet(expected);
		Assert.assertEquals(expectedCodes, actual.stream().map(CxVariationModel::getCode).collect(Collectors.toSet()));
	}
}
