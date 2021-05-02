/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 */
import * as __angular from 'angular';
import { TypedMap } from 'smarteditcommons';

declare global {
    const angular: typeof __angular;
    interface Window {
        test: { unit: TypedMap<TypedMap<any>> };
    }
}
