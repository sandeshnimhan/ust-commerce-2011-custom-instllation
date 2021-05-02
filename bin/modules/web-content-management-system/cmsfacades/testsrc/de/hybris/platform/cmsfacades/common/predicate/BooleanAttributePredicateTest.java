/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 */
package de.hybris.platform.cmsfacades.common.predicate;

import de.hybris.bootstrap.annotations.UnitTest;
import de.hybris.platform.cms2.servicelayer.services.AttributeDescriptorModelHelperService;
import de.hybris.platform.cmsfacades.common.predicate.DefaultClassTypeAttributePredicate;
import de.hybris.platform.core.model.type.AttributeDescriptorModel;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.runners.MockitoJUnitRunner;

import static org.hamcrest.Matchers.is;
import static org.junit.Assert.assertThat;
import static org.mockito.Mockito.doReturn;


@UnitTest
@RunWith(MockitoJUnitRunner.class)
public class BooleanAttributePredicateTest
{

	@Mock
	private AttributeDescriptorModelHelperService attributeDescriptorModelHelperService;
	@Mock
	private AttributeDescriptorModel attributeDescriptor;

	@InjectMocks
	private DefaultClassTypeAttributePredicate predicate;

	@Before
	public void setup()
	{
		predicate.setTypeClass(Boolean.class);
	}

	@Test
	public void whenTypeIsNotBooleanShouldReturnFalse()
	{
		doReturn(String.class).when(attributeDescriptorModelHelperService).getAttributeClass(attributeDescriptor);
		assertThat(predicate.test(attributeDescriptor), is(false));
	}

	@Test
	public void whenTypeIsGrandBooleanShouldReturnTrue()
	{
		doReturn(Boolean.class).when(attributeDescriptorModelHelperService).getAttributeClass(attributeDescriptor);
		assertThat(predicate.test(attributeDescriptor), is(true));
	}

	@Test
	public void whenTypeIsSmallBooleanShouldReturnTrue()
	{
		doReturn(boolean.class).when(attributeDescriptorModelHelperService).getAttributeClass(attributeDescriptor);
		assertThat(predicate.test(attributeDescriptor), is(true));
	}
}
