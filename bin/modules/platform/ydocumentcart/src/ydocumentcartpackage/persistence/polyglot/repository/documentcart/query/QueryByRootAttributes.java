/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 */
package ydocumentcartpackage.persistence.polyglot.repository.documentcart.query;

import java.util.Objects;
import java.util.Optional;


public class QueryByRootAttributes extends QueryByEntityAttributes
{
	public QueryByRootAttributes(final EntityCondition rootConditions)
	{
		super(Objects.requireNonNull(rootConditions, "rootConditions mustn't be null."));
	}

	@Override
	public Optional<EntityCondition> getRootCondition()
	{
		return getEntityCondition();
	}
}
