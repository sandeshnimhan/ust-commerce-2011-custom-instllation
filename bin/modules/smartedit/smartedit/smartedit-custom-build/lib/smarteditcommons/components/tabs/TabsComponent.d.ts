import { EventEmitter, OnChanges, SimpleChanges, Type } from '@angular/core';
import { ISelectItem } from '@smart/utils';
import { Observable } from 'rxjs';
export interface Tab {
    id: string;
    hasErrors: boolean;
    active?: boolean;
    message?: string;
    title: string;
    templateUrl?: string;
    component?: Type<any>;
}
/**
 * @ngdoc overview
 * @name SeTabs
 * @description
 *
 * The Tabs provide the components required to display a group of se-tab components within a se-tabs component. The
 * {@link SeTabs.component:TabsComponent TabsComponent} is of particular interest to SmartEdit developers
 * because this directive is responsible for displaying and organizing tabs.
 *
 */
/**
 * @ngdoc component
 * @name SeTabs.component:TabsComponent
 * @scope
 * @element se-tabs
 *
 * @description
 * The component responsible for displaying and organizing se-tab components within a se-tabs component. A specified number of tabs will
 * display a tab header. If there are more tabs than the maximum number defined, the remaining tabs will be grouped
 * in a drop-down menu with the header "More". When a user clicks on a tab header or an item from the drop-down
 * menu, the content of the tabs changes to the body of the selected tab.
 *
 * Note: The body of each tab is wrapped within a {@link SeTabs.component:TabComponent TabComponent} component.
 *
 * @param {Object} model Custom data to be passed to each tab. Neither the se-tabs component or the
 * se-tab component can modify this value. The tabs' contents determine how to parse and use this object.
 * @param {Object[]} tabsList A list that contains the configuration for each of the tabs to be displayed in the se-tabs.
 * @param {string} tabsList.id The ID used to track the tab within the tabs.
 * @param {String} tabsList.title The tab header.
 * @param {String} tabsList.templateUrl Path to the HTML fragment to be displayed as the tab content.
 *  Deprecated to maintain AngularJS functionality, use component instead.
 * @param {Object} tabsList.component Angular component to be dynamically injected, alternative to templateUrl
 * @param {boolean} tabsList.hasErrors Flag that indicates whether a visual error is to be displayed in the tab or not.
 * @param {Number} numTabsDisplayed The number of tabs for which tab headers will be displayed. The remaining tab
 * headers will be grouped within the 'MORE' drop-down menu.
 * @param {EventEmitter} onTabSelected Event trigger when the tab has been selected
 *
 */
export declare class TabsComponent<T> implements OnChanges {
    model: T;
    tabsList: Tab[];
    numTabsDisplayed: number;
    onTabSelected: EventEmitter<string>;
    selectedTab: Tab;
    selectItems: ISelectItem<Tab>[];
    dropdownTabs: ISelectItem<Tab>[];
    private tabChangedStream;
    readonly isInitialized: boolean;
    isActiveInMoreTab(): boolean;
    ngOnChanges(changes: SimpleChanges): void;
    selectTab(tabToSelect: Tab): void;
    dropDownHasErrors(): boolean;
    findSelectedTab(): void;
    getDropdownTabs(): Observable<ISelectItem<Tab>[]>;
    getVisibleTabs(): Observable<Tab[]>;
    trackTabById(index: number): number;
}
