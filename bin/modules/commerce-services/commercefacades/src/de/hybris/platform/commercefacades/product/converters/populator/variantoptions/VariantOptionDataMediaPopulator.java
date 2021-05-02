/*
 * Copyright (c) 2019 SAP SE or an SAP affiliate company. All rights reserved.
 */
package de.hybris.platform.commercefacades.product.converters.populator.variantoptions;

import de.hybris.platform.commercefacades.product.ImageFormatMapping;
import de.hybris.platform.commercefacades.product.data.ImageData;
import de.hybris.platform.commercefacades.product.data.VariantOptionData;
import de.hybris.platform.commercefacades.product.data.VariantOptionQualifierData;
import de.hybris.platform.converters.Populator;
import de.hybris.platform.core.model.media.MediaModel;
import de.hybris.platform.servicelayer.dto.converter.ConversionException;
import de.hybris.platform.variants.model.VariantProductModel;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Required;


public class VariantOptionDataMediaPopulator<SOURCE extends VariantProductModel, TARGET extends VariantOptionData> implements
		Populator<SOURCE, TARGET>
{

	private ImageFormatMapping acceleratorImageFormatMapping;

	private List<String> imageFormats;


	@Override
	public void populate(final VariantProductModel variantProductModel, final VariantOptionData variantOptionData)
			throws ConversionException
	{
		if (variantProductModel.getOthers() != null)
		{
			final Collection<VariantOptionQualifierData> qualifierDataList = new ArrayList<>();


			for (final Iterator<MediaModel> mediaModelIter = variantProductModel.getOthers().iterator(); mediaModelIter.hasNext();)
			{
				final MediaModel mediaModel = mediaModelIter.next();

				final ImageData imageData = new ImageData();
				imageData.setUrl(mediaModel.getURL());
				imageData.setFormat(getMediaFormat(mediaModel.getMediaFormat().getName()));

				final VariantOptionQualifierData qualifierData = new VariantOptionQualifierData();
				qualifierData.setImage(imageData);

				qualifierDataList.add(qualifierData);

				variantOptionData.setVariantOptionQualifiers(qualifierDataList);

			}
		}
	}

	protected String getMediaFormat(final String format)
	{
		for (final String imageFormat : imageFormats)
		{
			if (format != null && format.equals(getAcceleratorImageFormatMapping().getMediaFormatQualifierForImageFormat(imageFormat)))
			{
				return imageFormat;
			}
		}
		return null;
	}

	protected List<String> getImageFormats()
	{
		return imageFormats;
	}

	@Required
	public void setImageFormats(final List<String> imageFormats)
	{
		this.imageFormats = imageFormats;
	}

	protected ImageFormatMapping getAcceleratorImageFormatMapping()
	{
		return acceleratorImageFormatMapping;
	}

	@Required
	public void setAcceleratorImageFormatMapping(final ImageFormatMapping acceleratorImageFormatMapping)
	{
		this.acceleratorImageFormatMapping = acceleratorImageFormatMapping;
	}

}
