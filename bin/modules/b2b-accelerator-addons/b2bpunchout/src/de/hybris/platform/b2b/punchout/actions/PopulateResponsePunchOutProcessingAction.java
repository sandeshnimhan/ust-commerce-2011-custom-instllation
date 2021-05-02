/*
 * Copyright (c) 2019 SAP SE or an SAP affiliate company. All rights reserved.
 */
package de.hybris.platform.b2b.punchout.actions;

import de.hybris.platform.b2b.punchout.services.CXMLElementBrowser;
import de.hybris.platform.b2b.punchout.services.PunchOutConfigurationService;

import org.cxml.CXML;
import org.cxml.PunchOutSetupResponse;
import org.cxml.Response;
import org.cxml.StartPage;
import org.cxml.URL;
import org.springframework.beans.factory.annotation.Required;


/**
 * This implementation of {@link PunchOutProcessingAction} is meant to populate the PunchOut Setup Response.
 */
public class PopulateResponsePunchOutProcessingAction implements PunchOutProcessingAction<CXML, CXML>
{

	private PunchOutConfigurationService punchOutConfigurationService;

	@Override
	public void process(final CXML input, final CXML output)
	{
		final StartPage startPage = new StartPage();
		final URL url = new URL();
		url.setvalue(punchOutConfigurationService.getPunchOutLoginUrl());
		startPage.setURL(url);

		final PunchOutSetupResponse punchoutSetupResponse = new PunchOutSetupResponse();
		punchoutSetupResponse.setStartPage(startPage);

		final CXMLElementBrowser cxmlBrowser = new CXMLElementBrowser(output);

		if (cxmlBrowser.hasResponse())
		{
			cxmlBrowser
					.findResponse()
					.getProfileResponseOrPunchOutSetupResponseOrProviderSetupResponseOrGetPendingResponseOrSubscriptionListResponseOrSubscriptionContentResponseOrSupplierListResponseOrSupplierDataResponseOrAuthResponseOrDataResponseOrOrganizationDataResponse()
					.add(punchoutSetupResponse);
		}
		else
		{
			final Response response = new Response();
			response
					.getProfileResponseOrPunchOutSetupResponseOrProviderSetupResponseOrGetPendingResponseOrSubscriptionListResponseOrSubscriptionContentResponseOrSupplierListResponseOrSupplierDataResponseOrAuthResponseOrDataResponseOrOrganizationDataResponse()
					.add(punchoutSetupResponse);

			output.getHeaderOrMessageOrRequestOrResponse().add(response);
		}
	}

	public PunchOutConfigurationService getPunchOutConfigurationService()
	{
		return punchOutConfigurationService;
	}

	@Required
	public void setPunchOutConfigurationService(final PunchOutConfigurationService punchOutConfigurationService)
	{
		this.punchOutConfigurationService = punchOutConfigurationService;
	}
}
