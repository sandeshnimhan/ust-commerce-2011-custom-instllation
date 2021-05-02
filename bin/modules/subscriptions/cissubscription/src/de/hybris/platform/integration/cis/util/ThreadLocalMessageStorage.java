/*
 * Copyright (c) 2019 SAP SE or an SAP affiliate company. All rights reserved.
 */
package de.hybris.platform.integration.cis.util;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;
import java.util.Set;

/**
 *  Utility class implementing java.util.Map interface and acts as a Message storage. 
 *  Note that Thread is not the same as Request, so you need to clear out messages after it got.
 */
public class ThreadLocalMessageStorage implements Map<String, String> {
	private static ThreadLocal<Map<String, String>> threadLocalInstance = new ThreadLocal<Map<String,String>>() {
		@Override protected Map<String,String> initialValue() {
            return new HashMap<String, String>();
		}
		
		@Override
		public void remove()
		{
			threadLocalInstance.remove();
		}
	};

	@Override
	public int size() {
		return threadLocalInstance.get().size();
	}

	@Override
	public boolean isEmpty() {
		return threadLocalInstance.get().isEmpty();
	}

	@Override
	public boolean containsKey(Object key) {
		return threadLocalInstance.get().containsKey(key);
	}

	@Override
	public boolean containsValue(Object value) {
		return threadLocalInstance.get().containsValue(value);
	}

	@Override
	public String get(Object key) {
		return threadLocalInstance.get().get(key);
	}

	@Override
	public String put(String key, String value) {
		return threadLocalInstance.get().put(key, value);
	}

	@Override
	public String remove(Object key) {
		return threadLocalInstance.get().remove(key);
	}

	@Override
	public void putAll(Map<? extends String, ? extends String> m) {
		threadLocalInstance.get().putAll(m);
	}

	@Override
	public void clear() {
		threadLocalInstance.get().clear();	
	}

	@Override
	public Set<String> keySet() {
		return threadLocalInstance.get().keySet();
	}

	@Override
	public Collection<String> values() {
		return threadLocalInstance.get().values();
	}

	@Override
	public Set<java.util.Map.Entry<String, String>> entrySet() {
		return threadLocalInstance.get().entrySet();
	}
	
}
