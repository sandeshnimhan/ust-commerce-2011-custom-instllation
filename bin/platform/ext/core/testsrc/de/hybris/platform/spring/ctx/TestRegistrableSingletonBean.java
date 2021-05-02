/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 */
package de.hybris.platform.spring.ctx;

import java.util.Map;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.BeanNameAware;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.annotation.Required;


/**
 *
 */
public class TestRegistrableSingletonBean implements InitializingBean, BeanNameAware
{

	private static final Logger LOG = Logger.getLogger(TestRegistrableSingletonBean.class.getName());

	private String beanId;

	private Map creationCalls;

	@Required
	public void setCreationCalls(final Map registeredCalls)
	{
		LOG.info("set calls" + this + ", " + registeredCalls);
		this.creationCalls = registeredCalls;
	}

	@Override
	public void afterPropertiesSet() throws Exception
	{
		LOG.info("after props " + this + ", " + beanId);
		creationCalls.put(beanId, this);
	}

	@Override
	public void setBeanName(final String name)
	{
		beanId = name;
	}

}
