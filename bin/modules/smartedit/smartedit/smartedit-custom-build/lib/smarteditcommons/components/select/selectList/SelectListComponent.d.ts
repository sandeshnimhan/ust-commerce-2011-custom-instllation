import { EventEmitter, Type } from '@angular/core';
import { ListItemKeyboardControlDirective } from '@smart/utils';
import { FetchPageStrategy, SelectDisableChoice, SelectItem } from '../interfaces';
import { SelectComponent } from '../SelectComponent';
/**
 * Represents Dropdown List for Select Component
 *
 * @internal
 */
export declare class SelectListComponent<T extends SelectItem> {
    id: string;
    isPagedDropdown: boolean;
    fetchPage: FetchPageStrategy<T>;
    search: string;
    items: T[];
    selected: T | T[];
    /** Whether to display selected item */
    excludeSelected: boolean;
    disableChoiceFn?: SelectDisableChoice<T>;
    itemComponent: Type<any>;
    selectComponentCtx: SelectComponent<T>;
    optionClick: EventEmitter<T>;
    infiniteScrollItemsChange: EventEmitter<T>;
    readonly infiniteScrollingPageSize: number;
    keyboardControlDisabledPredicate(item: ListItemKeyboardControlDirective): boolean;
    itemTrackBy(_: any, item: SelectItem): string;
    isItemSelected(item: T): boolean;
    onOptionClick(event: MouseEvent, item: T): void;
    onEnterKeydown(itemIndex: number): void;
    isItemDisabled(item: T): boolean;
    onInfiniteScrollItemsChange(): void;
    /** Returns items that are displayed in the list */
    private getItems;
}
