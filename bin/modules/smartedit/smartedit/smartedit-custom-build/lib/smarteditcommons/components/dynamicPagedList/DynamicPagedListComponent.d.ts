import { ChangeDetectorRef, EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { LogService, Page, RestServiceFactory } from '@smart/utils';
import { DynamicPagedListApi, DynamicPagedListColumnKey, DynamicPagedListConfig } from './interfaces';
/**
 * @ngdoc component
 * @name smarteditCommonsModule.component:DynamicPagedListComponent
 * @element se-dynamic-paged-list
 *
 * @description
 * Component responsible for displaying a server-side paginated list of items with custom components. It allows the user to search and sort the list.
 *
 * @param {DynamicPagedListConfig} config {@link smarteditCommonsModule.interface:DynamicPagedListConfig config}
 * @param {<String?} mask The string value used to filter the result.
 * @param {EventEmitter<DynamicPagedListApi>} getApi Exposes the dynamic paged list module's api object
 * @param {EventEmitter<Page<any>>} onItemsUpdate  Event that exposes the item list
 *
 * @example
 * <em>Example of a <strong>renderers</strong> object(AngularJS legacy support)</em>
 *
 * <pre>
 *          renderers = {
 *              name: function(item, key) {
 *                  return "<a data-ng-click=\"$ctrl.config.injectedContext.onLink( item.path )\">{{ item[key.property] }}</a>";
 *              }
 *          };
 * </pre>
 *
 * <em>Example of an <strong>injectedContext</strong> object</em>
 * <pre>
 *          injectedContext = {
 *              onLink: function(link) {
 *                  if (link) {
 *                      var experiencePath = this._buildExperiencePath();
 *                      iframeManagerService.setCurrentLocation(link);
 *                      $location.path(experiencePath);
 *                  }
 *              }.bind(this),
 *              dropdownItems: []
 *          };
 * </pre>
 *
 *
 *  For Angular component(to be used instead of renderer) support read: {@link smarteditCommonsModule.component:DataTableComponent DataTableComponent}
 */
export declare class DynamicPagedListComponent implements OnInit, OnChanges {
    private logService;
    private restServiceFactory;
    private cdr;
    config: DynamicPagedListConfig;
    mask: string;
    getApi: EventEmitter<DynamicPagedListApi>;
    onItemsUpdate: EventEmitter<Page<any>>;
    internalSortBy: string;
    columnSortMode: string;
    currentPage: number;
    ready: boolean;
    totalItems: number;
    items: any[];
    columns: DynamicPagedListColumnKey[];
    private oldMask;
    private api;
    constructor(logService: LogService, restServiceFactory: RestServiceFactory, cdr: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    orderByColumn(event: {
        $columnKey: DynamicPagedListColumnKey;
        $columnSortMode: string;
    }): void;
    loadItems(): Promise<Page<any>>;
    onCurrentPageChange(newCurrentPage: number): void;
    private _validateInput;
    private _buildColumnData;
}
