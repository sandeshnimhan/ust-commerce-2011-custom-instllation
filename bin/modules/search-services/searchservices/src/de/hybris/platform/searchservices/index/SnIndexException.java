/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 */
package de.hybris.platform.searchservices.index;

import de.hybris.platform.searchservices.core.SnException;


/**
 * Represents an index related exception.
 */
public class SnIndexException extends SnException
{
	/**
	 * Constructs a new exception with null as its detail message.
	 *
	 * @see Exception#Exception()
	 */
	public SnIndexException()
	{
		super();
	}

	/**
	 * Constructs a new exception with the specified detail message.
	 *
	 * @param message
	 *           - the message
	 *
	 * @see Exception#Exception(String)
	 */
	public SnIndexException(final String message)
	{
		super(message);
	}

	/**
	 * Constructs a new exception with the specified detail message and cause.
	 *
	 * @param message
	 *           - the message
	 * @param cause
	 *           - the cause
	 *
	 * @see Exception#Exception(String, Throwable)
	 */
	public SnIndexException(final String message, final Throwable cause)
	{
		super(message, cause);
	}

	/**
	 * Constructs a new exception with the specified cause.
	 *
	 * @param cause
	 *           - the cause
	 *
	 * @see Exception#Exception(Throwable)
	 */
	public SnIndexException(final Throwable cause)
	{
		super(cause);
	}
}
