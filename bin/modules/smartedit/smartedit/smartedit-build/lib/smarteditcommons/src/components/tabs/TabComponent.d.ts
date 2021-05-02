import { InjectionToken, Injector, OnChanges, SimpleChanges } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Tab } from './TabsComponent';
export declare const TAB_DATA: InjectionToken<unknown>;
/**
 * @ngdoc component
 * @name SeTabs.component:TabComponent
 * @scope
 * @element se-tab
 *
 * @description
 * The component  responsible for wrapping the content of a tab within a
 * {@link SeTabs.component:TabsComponent TabsComponent} component.
 *
 * @param {Object} tab Object defining tab contents.
 * @param {Object} model Custom data. Neither the se-tabs component or the se-tab component
 * can modify this value. The tabs' contents determine how to parse and use this object.
 *
 */
/**
 * @ngdoc interface
 * @name SeTabs.interfaces:TabData
 *
 * @description
 * A data to be injected by {@link SeTabs.component:TabComponent TabComponent} to child component
 */
export interface TabData<T = {}> {
    model: T;
    tabId: string;
    tab: Tab;
}
export declare class TabComponent<T> implements OnChanges {
    private injector;
    tab: Tab;
    model: T;
    scopeStream: BehaviorSubject<{
        model: T;
        tabId: string;
        tab: Tab;
    }>;
    tabInjector: Injector;
    constructor(injector: Injector);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    readonly isLegacyTab: boolean;
}
