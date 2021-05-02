import { ChangeDetectorRef, ElementRef, Injector, OnChanges, SimpleChanges } from '@angular/core';
import { Placement } from 'popper.js';
import { ITemplateCacheService } from 'smarteditcommons/services/interfaces/ITemplateCacheService';
import { IDropdownMenuItem } from './IDropdownMenuItem';
import './DropdownMenuComponent.scss';
/**
 * @ngdoc component
 * @name smarteditCommonsModule.component:DropdownMenuComponent
 *
 * @description
 *
 * Renders a Dropdown Menu.
 * It has two Inputs `dropdownItems` and `selectedItem`.
 * The dropdownItems is an array of objects
 * which must contain either an i18n key associated to a callback function,
 * a static HTML template or a templateUrl leading to an external HTML file.
 * An optional condition can be added to define whether the item is to get
 * rendered.
 * The selectedItem is the object associated to the dropdown. It is passed
 * as argument for the callback of dropdownItems.
 * For a given item, if a condition callback is defined, the item will show
 * only if this callback returns true
 *
 * @example
 *  this.dropdownItems = [
 *    {
 *      key: 'my.translated.key',
 *      callback: function() {
 *        doSomething();
 *      }.bind(this)
 *    },
 *      { template: '<my-component />' },
 *      { templateUrl: 'myComponentTemplate.html' }
 *   ];
 *
 * @param {Array} dropdownItems An object containing parameters allowing
 * for the selection of a cached HTML template used to render the dropdown
 * menu item.
 * @param {Function} [dropdownItems.callback] Function will be called when
 * the user click on the drop down item.
 * @param {Function} [dropdownItems.condition] Function will be called to
 * check whether the item is to be rendered.
 * @param {String} [dropdownItems.icon] Identifier of the icon associated to
 * the dropdown item
 * @param {String} [dropdownItems.key] I18n key for the label associated to
 * the dropdown item
 * @param {String} [dropdownItems.template] Static HTML template used to
 * render the dropdown item.
 * @param {String} [dropdownItems.templateUrl] HTML file used to render the
 * dropdown item.
 * @param {String} [dropdownItems.customCss] Custom css class that is appended
 * to the dropdown item
 * @param {Object} [selectedItem] An object defining the context of the page
 * associated to the dropdown item.
 */
export declare class DropdownMenuComponent implements OnChanges {
    private $templateCache;
    private cd;
    dropdownItems: IDropdownMenuItem[];
    selectedItem: any;
    placement: Placement;
    toggleMenuElement: ElementRef<HTMLDivElement>;
    isOpen: boolean;
    clonedDropdownItems: IDropdownMenuItem[];
    dropdownMenuItemDefaultInjector: Injector;
    constructor($templateCache: ITemplateCacheService, cd: ChangeDetectorRef);
    ngOnChanges(changes: SimpleChanges): void;
}
