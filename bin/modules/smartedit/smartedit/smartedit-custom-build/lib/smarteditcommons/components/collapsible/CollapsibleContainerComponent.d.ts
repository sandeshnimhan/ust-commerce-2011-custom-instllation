import { ElementRef, EventEmitter, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { CollapsibleContainerApi, CollapsibleContainerConfig } from './interfaces';
/**
 * @ngdoc component
 * @name smarteditCommonsModule.component:CollapsibleContainerComponent
 * @description
 *
 * The CollapsibleContainerComponent is an Angular component that allows for the dynamic display of any HTML content on a collapsible container.
 *
 * <pre>
 *    <se-collapsible-container>
 *       <se-collapsible-container-header>
 *           Your title here
 *       </se-collapsible-container-header>
 *      <se-collapsible-container-content>
 *           Your content here
 *       </se-collapsible-container-content>
 *    </se-collapsible-container>
 * </pre>
 *
 * @param {<Object=} configuration JSON object containing the configuration to be applied on a collapsible container.
 * @param {Boolean} configuration.expandedByDefault Specifies if the collapsible container is expanded by default.
 * @param {String} configuration.iconAlignment Specifies if the expand-collapse icon is to be displayed to the *left* or to the _right_ of the container header.
 * @param {Boolean} configuration.iconVisible Specifies if the expand-collapse icon is to be rendered.
 * @param {& Function =} getApi Exposes the collapsible container's api object
 */
export declare class CollapsibleContainerComponent implements OnInit, OnChanges, OnDestroy {
    configuration: CollapsibleContainerConfig;
    getApi: EventEmitter<CollapsibleContainerApi>;
    _container: ElementRef;
    containerHeight: number;
    headingId: string;
    panelId: string;
    isOpen: boolean;
    isDisabled: boolean;
    private container;
    private mutationObserver;
    private api;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    toggle(): void;
    handleKeypress(event: KeyboardEvent): void;
    isIconRight(): boolean;
    isIconLeft(): boolean;
    private configure;
}
