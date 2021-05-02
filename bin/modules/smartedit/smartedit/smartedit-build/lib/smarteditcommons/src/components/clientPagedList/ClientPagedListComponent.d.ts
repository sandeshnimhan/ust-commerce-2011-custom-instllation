import { ChangeDetectorRef, OnChanges, SimpleChanges } from '@angular/core';
import { SlicePipe } from '@angular/common';
import { TypedMap } from '@smart/utils';
import { FilterByFieldPipe, StartFromPipe } from '../../pipes';
import { IDropdownMenuItem } from '../dropdown/dropdownMenu';
import { CompileHtmlNgController } from '../../directives';
import { ClientPagedList, ClientPagedListColumnKey, ClientPagedListItem } from './interfaces';
/**
 * @ngdoc component
 * @name smarteditCommonsModule.module:ClientPagedListModule.component:ClientPagedListComponent
 * @description
 * Component responsible for displaying a client-side paginated list of items as a text or custom components.
 * It allows the user to search and sort the list.
 *
 * @param {Object[]} items {@link smarteditCommonsModule.module:ClientPagedListModule.interface:ClientPagedList#properties_items items}
 * @param {Object[]} keys {@link smarteditCommonsModule.module:ClientPagedListModule.interface:ClientPagedList#properties_keys keys}
 * @param {number} itemsPerPage {@link smarteditCommonsModule.interface:PagedList#properties_itemsPerPage itemsPerPage}
 * @param {string} [sortBy] Optional {@link smarteditCommonsModule.interface:PagedList#properties_sortBy sortBy}
 * @param {boolean} [reversed=false] {@link smarteditCommonsModule.interface:PagedList#properties_reversed reversed}
 * @param {string} [query] Optional {@link smarteditCommonsModule.module:ClientPagedListModule.interface:ClientPagedList#properties_query query}
 * @param {boolean} [displayCount=false] {@link smarteditCommonsModule.interface:PagedList#properties_displayCount displayCount}
 * @param {Object[]} [dropdownItems] Optional {@link smarteditCommonsModule.interface:PagedList#properties_dropdownItems dropdownItems}
 * @param {string[]} [itemFilterKeys] Optional {@link smarteditCommonsModule.module:ClientPagedListModule.interface:ClientPagedList#properties_itemFilterKeys itemFilterKeys}
 *
 */
export declare class ClientPagedListComponent implements ClientPagedList, OnChanges {
    private cdr;
    private filterByFieldPipe;
    private startFromPipe;
    private slicePipe;
    items: ClientPagedListItem[];
    itemFilterKeys: string[];
    keys: ClientPagedListColumnKey[];
    itemsPerPage: number;
    sortBy: string;
    reversed: boolean;
    query: string;
    displayCount: boolean;
    dropdownItems: IDropdownMenuItem[];
    totalItems: number;
    /**
     * Pagination page number
     */
    currentPage: number;
    columnWidth: number;
    columnToggleReversed: boolean;
    headersSortingState: TypedMap<boolean>;
    visibleSortingHeader: string;
    compileHtmlNgController: CompileHtmlNgController;
    filteredItems: ClientPagedListItem[];
    constructor(cdr: ChangeDetectorRef, filterByFieldPipe: FilterByFieldPipe, startFromPipe: StartFromPipe, slicePipe: SlicePipe);
    ngOnChanges(changes: SimpleChanges): void;
    keysTrackBy(_index: number, key: ClientPagedListColumnKey): string;
    onOrderByColumn(columnKeyProp: string): void;
    onCurrentPageChange(page: number): void;
    private filterItems;
}
