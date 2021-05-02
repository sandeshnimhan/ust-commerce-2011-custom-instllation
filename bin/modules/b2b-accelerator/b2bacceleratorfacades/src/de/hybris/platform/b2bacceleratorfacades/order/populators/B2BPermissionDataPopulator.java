/*
 * Copyright (c) 2019 SAP SE or an SAP affiliate company. All rights reserved.
 */
package de.hybris.platform.b2bacceleratorfacades.order.populators;

import de.hybris.platform.b2b.enums.B2BPermissionTypeEnum;
import de.hybris.platform.b2b.model.B2BOrderThresholdPermissionModel;
import de.hybris.platform.b2b.model.B2BOrderThresholdTimespanPermissionModel;
import de.hybris.platform.b2b.model.B2BPermissionModel;
import de.hybris.platform.b2b.model.B2BUnitModel;
import de.hybris.platform.b2bapprovalprocessfacades.company.converters.populators.B2BPermissionPopulator;
import de.hybris.platform.b2bapprovalprocessfacades.company.data.B2BPermissionData;
import de.hybris.platform.b2bapprovalprocessfacades.company.data.B2BPermissionTypeData;
import de.hybris.platform.b2bcommercefacades.company.data.B2BUnitData;
import de.hybris.platform.commercefacades.storesession.data.CurrencyData;
import de.hybris.platform.converters.Populator;
import de.hybris.platform.core.model.c2l.CurrencyModel;
import de.hybris.platform.servicelayer.dto.converter.Converter;

import org.springframework.beans.factory.annotation.Required;


/**
 * Converts {@link B2BPermissionModel} to {@link B2BPermissionData}.
 *
 * @deprecated Since 6.0. Use {@link B2BPermissionPopulator} instead.
 */
@Deprecated(since = "6.0", forRemoval = true)
public class B2BPermissionDataPopulator implements Populator<B2BPermissionModel, B2BPermissionData>
{
	private Converter<CurrencyModel, CurrencyData> currencyConverter;
	private Converter<B2BPermissionTypeEnum, B2BPermissionTypeData> b2BPermissionTypeConverter;

	@SuppressWarnings("boxing")
	@Override
	public void populate(final B2BPermissionModel source, final B2BPermissionData target)
	{
		target.setCode(source.getCode());
		final B2BUnitModel unit = source.getUnit();
		final B2BUnitData b2BUnitData = new B2BUnitData();
		b2BUnitData.setUid(unit.getUid());
		b2BUnitData.setName(unit.getLocName());
		b2BUnitData.setActive(Boolean.TRUE.equals(unit.getActive()));
		target.setUnit(b2BUnitData);

		target.setActive(Boolean.TRUE.equals(source.getActive()));
		target.setB2BPermissionTypeData(
				getB2BPermissionTypeConverter().convert(B2BPermissionTypeEnum.valueOf(source.getItemtype())));
		if (source instanceof B2BOrderThresholdTimespanPermissionModel)
		{
			final B2BOrderThresholdTimespanPermissionModel permissionModel = (B2BOrderThresholdTimespanPermissionModel) source;
			target.setCurrency(getCurrencyConverter().convert(permissionModel.getCurrency()));
			target.setValue(permissionModel.getThreshold());
			target.setTimeSpan(permissionModel.getRange().name());
			target.setPeriodRange(permissionModel.getRange());
		}
		else if (source instanceof B2BOrderThresholdPermissionModel)
		{
			final B2BOrderThresholdPermissionModel permissionModel = (B2BOrderThresholdPermissionModel) source;
			target.setCurrency(getCurrencyConverter().convert(permissionModel.getCurrency()));
			target.setValue(permissionModel.getThreshold());
		}
	}

	protected Converter<CurrencyModel, CurrencyData> getCurrencyConverter()
	{
		return currencyConverter;
	}

	@Required
	public void setCurrencyConverter(final Converter<CurrencyModel, CurrencyData> currencyConverter)
	{
		this.currencyConverter = currencyConverter;
	}

	protected Converter<B2BPermissionTypeEnum, B2BPermissionTypeData> getB2BPermissionTypeConverter()
	{
		return b2BPermissionTypeConverter;
	}

	@Required
	public void setB2BPermissionTypeConverter(
			final Converter<B2BPermissionTypeEnum, B2BPermissionTypeData> b2bPermissionTypeConverter)
	{
		b2BPermissionTypeConverter = b2bPermissionTypeConverter;
	}
}
