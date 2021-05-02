/// <reference types="angular" />
import { IDropdownMenuItem } from './IDropdownMenuItem';
import './yDropdownMenu.scss';
/**
 * @ngdoc directive
 * @name smarteditCommonsModule.directive:yDropDownMenu
 * @scope
 * @restrict E
 * @element y-drop-down-menu
 *
 * @deprecated since 2005, use {@link smarteditCommonsModule.component:DropdownMenuComponent DropdownMenuComponent}
 *
 * @description
 *
 * Deprecated since 2005, use {@link smarteditCommonsModule.component:DropdownMenuComponent DropdownMenuComponent}
 */
export declare class YDropDownMenuComponent {
    private $templateCache;
    dropdownItems: IDropdownMenuItem[];
    selectedItem: IDropdownMenuItem;
    clonedDropdownItems: IDropdownMenuItem[];
    constructor($templateCache: angular.ITemplateCacheService);
    $onChanges(): void;
    isDeleteButton(dropdownItem: IDropdownMenuItem): boolean;
    private setTemplateUrl;
    private _cacheDropdownItemTemplate;
    private _validatePassedAttribute;
}
