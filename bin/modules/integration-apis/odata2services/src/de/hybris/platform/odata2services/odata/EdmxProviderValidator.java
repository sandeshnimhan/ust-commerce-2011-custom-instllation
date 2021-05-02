/*
 * [y] hybris Platform
 *
 * Copyright (c) 2018 SAP SE or an SAP affiliate company.
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of SAP
 * ("Confidential Information"). You shall not disclose such Confidential
 * Information and shall use it only in accordance with the terms of the
 * license agreement you entered into with SAP.
 */
package de.hybris.platform.odata2services.odata;

import de.hybris.platform.integrationservices.util.Log;

import java.io.IOException;
import java.io.InputStream;
import java.nio.charset.StandardCharsets;

import org.apache.commons.io.IOUtils;
import org.apache.olingo.odata2.api.exception.ODataException;
import org.apache.olingo.odata2.api.processor.ODataResponse;
import org.apache.olingo.odata2.core.edm.provider.EdmxProvider;
import org.slf4j.Logger;

import com.google.common.base.Preconditions;

public class EdmxProviderValidator
{
	private static final Logger LOG = Log.getLogger(EdmxProviderValidator.class);

	public void validateResponse(final ODataResponse oDataResponse)
	{
		Preconditions.checkArgument(oDataResponse != null, "The oDataResponse is null and cannot be validated");

		LOG.debug("Validating oDataResponse");
		String odataSchemaString = null;
		try (final InputStream entityAsStream = oDataResponse.getEntityAsStream())
		{
			odataSchemaString = IOUtils.toString(entityAsStream, StandardCharsets.UTF_8.name());

			validateODataSchema(oDataResponse);
		}
		catch (final IOException e)
		{
			throw new InvalidODataSchemaException(e);
		}
		catch (final ODataException e)
		{
			LOG.error("The following schema is not valid: {}", odataSchemaString, e);
			throw new InvalidODataSchemaException(e);
		}
	}

	private static void validateODataSchema(final ODataResponse oDataResponse) throws ODataException
	{
		final InputStream entityAsStream = oDataResponse.getEntityAsStream();
		new EdmxProvider().parse(entityAsStream, true);
	}
}
