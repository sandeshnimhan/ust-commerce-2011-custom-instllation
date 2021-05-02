import * as angular from 'angular';
import { UpgradeModule } from '@angular/upgrade/static';
export interface ICustomElement extends HTMLElement {
    connectedCallback?(): void;
    disconnectedCallback?(): void;
    attributeChangedCallback?(name: string, oldValue: any, newValue: any): void;
}
export declare type CustomElementConstructor = new (...arg: any[]) => ICustomElement;
export declare abstract class AbstractAngularJSBasedCustomElement extends HTMLElement implements ICustomElement {
    private upgrade;
    protected scope: angular.IScope;
    private PROCESSED_ATTRIBUTE_NAME;
    constructor(upgrade: UpgradeModule);
    abstract internalConnectedCallback(): void;
    internalAttributeChangedCallback?(name: string, oldValue: any, newValue: any): void;
    internalDisconnectedCallback?(): void;
    markAsProcessed(): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    attributeChangedCallback(name: string, oldValue: any, newValue: any): void;
    readonly $rootScope: angular.IRootScopeService;
    readonly $compile: angular.ICompileService;
    private shouldReactOnAttributeChange;
}
