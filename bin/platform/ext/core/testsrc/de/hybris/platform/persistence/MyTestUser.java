/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 */
package de.hybris.platform.persistence;

import de.hybris.platform.jalo.Item;
import de.hybris.platform.jalo.JaloBusinessException;
import de.hybris.platform.jalo.SessionContext;
import de.hybris.platform.jalo.type.ComposedType;
import de.hybris.platform.jalo.user.User;


public class MyTestUser extends User
{

	@Override
	protected Item createItem(final SessionContext ctx, final ComposedType type, final ItemAttributeMap allAttributes)
			throws JaloBusinessException
	{
		allAttributes.setAttributeMode(InitialAttributePersistenceTest.ATTRIBUTE_NAME, AttributeMode.INITIAL);
		return super.createItem(ctx, type, allAttributes);
	}

}
