import { InjectionToken } from '@angular/core';
import { IDropdownMenuItem } from './IDropdownMenuItem';
interface IDropdownMenuItemData {
    dropdownItem: IDropdownMenuItem;
    selectedItem: any;
}
export declare const DROPDOWN_MENU_ITEM_DATA: InjectionToken<IDropdownMenuItemData>;
/**
 * @ngdoc component
 * @name smarteditCommonsModule.component:DropdownMenuItemDefaultComponent
 *
 * @description
 * Component that represents a default Dropdown Menu Item.
 * Rendered by DropdownMenuComponent when Dropdown Menu Item has `callback` function.
 */
export declare class DropdownMenuItemDefaultComponent {
    data: IDropdownMenuItemData;
    constructor(data: IDropdownMenuItemData);
}
export {};
