import { EventEmitter, InjectionToken, OnInit } from '@angular/core';
import { TypedMap } from '@smart/utils';
import { SortDirections } from '../../utils';
import { DynamicPagedListColumnKey } from '../dynamicPagedList/interfaces';
export interface DataTableConfig {
    sortBy: string;
    reversed: boolean;
    injectedContext: any;
}
export interface DataTableComponentData {
    item: TypedMap<any>;
    column: DynamicPagedListColumnKey;
}
/**
 * @ngdoc object
 * @name smarteditCommonsModule.object:DATA_TABLE_COMPONENT_DATA
 *
 * @description
 * An injection token used to retrieve information about data table column and item from within rendered component.
 */
export declare const DATA_TABLE_COMPONENT_DATA: InjectionToken<unknown>;
/**
 * @ngdoc component
 * @name smarteditCommonsModule.component:DataTableComponent
 * @element se-data-table
 *
 * @description
 * Component used to print the provided data in the form of table and also enable sorting by column.
 *
 * @param {<Array} columns An array containing the properties of the column.
 * @param {<String} columns.key A unique identification key for the column
 * @param {<String} columns.i18n A printable column name.
 * @param {<Function} columns.renderer Deprecated, use component. A renderer function that returns a template for the column value.
 * @param {Type<any>} columns.component A component to be rendered within the column. Can be injected with {@link smarteditCommonsModule.object:DATA_TABLE_COMPONENT_DATA DATA_TABLE_COMPONENT_DATA}
 * token which provides data about column and item
 * @param {<Boolean} columns.sortable Boolean that determines if the column is sortable or not. [Default = false]
 * @param {<Object} config The config object that contains reversed, sortBy params.
 * @param {<Number} items The items to be displayed
 * @param {&Function} onSortColumn The function that is called with the column key and the sort direction every time sorting is done. The invoker
 * can bind this to a custom function to act and fetch results based on new data.
 */
export declare class DataTableComponent implements OnInit {
    columns: DynamicPagedListColumnKey[];
    config: DataTableConfig;
    items: TypedMap<any>[];
    onSortColumn: EventEmitter<{
        $columnKey: DynamicPagedListColumnKey;
        $columnSortMode: SortDirections;
    }>;
    internalSortBy: string;
    currentPage: number;
    columnWidth: number;
    columnToggleReversed: boolean;
    columnSortMode: SortDirections;
    headersSortingState: TypedMap<boolean>;
    visibleSortingHeader: string;
    ngOnInit(): void;
    sortColumn(columnKey: DynamicPagedListColumnKey): void;
    private _configure;
    private _validateInput;
}
