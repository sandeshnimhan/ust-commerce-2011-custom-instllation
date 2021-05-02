import { InjectionToken } from '@angular/core';
import { ICatalog, ICatalogVersion } from '../dtos';
export interface CatalogDetailsItemData {
    siteId: string;
    catalog: ICatalog;
    catalogVersion: ICatalogVersion;
    activeCatalogVersion: ICatalogVersion;
}
export declare const CATALOG_DETAILS_ITEM_DATA: InjectionToken<CatalogDetailsItemData>;
