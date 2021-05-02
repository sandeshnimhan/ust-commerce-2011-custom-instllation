/*
 * Copyright (c) 2019 SAP SE or an SAP affiliate company. All rights reserved.
 */
package de.hybris.platform.b2b.interceptor;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.equalTo;

import de.hybris.platform.b2b.constants.B2BConstants;
import de.hybris.bootstrap.annotations.UnitTest;
import de.hybris.platform.b2b.interceptor.B2BCustomerPrepareInterceptor;
import de.hybris.platform.b2b.model.B2BCustomerModel;
import de.hybris.platform.b2b.model.B2BPermissionModel;
import de.hybris.platform.b2b.model.B2BPermissionResultModel;
import de.hybris.platform.b2b.model.B2BUserGroupModel;
import de.hybris.platform.b2b.services.B2BPermissionService;
import de.hybris.platform.commerceservices.search.dao.PagedGenericDao;
import de.hybris.platform.commerceservices.search.pagedata.PageableData;
import de.hybris.platform.commerceservices.search.pagedata.SearchPageData;
import de.hybris.platform.servicelayer.exceptions.UnknownIdentifierException;
import de.hybris.platform.servicelayer.model.ModelService;
import de.hybris.platform.b2b.model.B2BCustomerModel;
import de.hybris.platform.b2b.model.B2BUnitModel;
import de.hybris.platform.b2b.services.B2BUnitService;
import de.hybris.platform.servicelayer.user.UserService;
import de.hybris.platform.core.model.security.PrincipalGroupModel;
import de.hybris.platform.core.model.user.UserGroupModel;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.Collections;

import org.apache.commons.collections.SetUtils;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.mockito.BDDMockito;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;


@UnitTest
public class B2BCustomerPrepareInterceptorTest
{

	private final B2BCustomerPrepareInterceptor b2bCustomerPrepareInterceptor = new B2BCustomerPrepareInterceptor();

	@Mock
	private B2BUnitService<B2BUnitModel, B2BCustomerModel> b2bUnitService;
	@Mock
	private UserService userService;

	@Before
	public void setup() throws Exception
	{
		MockitoAnnotations.initMocks(this);

		b2bCustomerPrepareInterceptor.setUserService(userService);
		b2bCustomerPrepareInterceptor.setB2bUnitService(b2bUnitService);
	}

	@Test
	public void testB2BUnitIsInGroups()
	{
		final B2BCustomerModel model = Mockito.mock(B2BCustomerModel.class);
		final Set<PrincipalGroupModel> groups = new HashSet<>();
		final PrincipalGroupModel principalGroupModel1 = new PrincipalGroupModel();
		groups.add(principalGroupModel1);

		BDDMockito.given(model.getGroups()).willReturn(groups);
		final B2BUnitModel parentUnit = new B2BUnitModel();
		BDDMockito.given(b2bUnitService.getParent(model)).willReturn(parentUnit);
		
		b2bCustomerPrepareInterceptor.onPrepare(model, null);

		assertThat(model.getGroups(), equalTo(groups));
	}

	@Test
	public void testRemoveApproversNotInB2bapprovergroup()
	{
		final B2BCustomerModel model = Mockito.mock(B2BCustomerModel.class);
		final Set<B2BCustomerModel> approvers = new HashSet<>();
		final B2BCustomerModel approver1 = new B2BCustomerModel();
		approvers.add(approver1);

		final UserGroupModel b2bApproverGroup = new UserGroupModel();
		BDDMockito.given(userService.getUserGroupForUID(B2BConstants.B2BAPPROVERGROUP)).willReturn(b2bApproverGroup);
		BDDMockito.given(userService.isMemberOfGroup(approver1, b2bApproverGroup)).willReturn(false);

		assertThat(model.getApprovers(), equalTo(Collections.emptySet()));
	}

}
