import { EventEmitter, Injector, SimpleChanges } from '@angular/core';
import { Placement } from 'popper.js';
import { TypedMap } from '@smart/utils';
import { PopupOverlayConfig } from './PopupOverlayConfig';
import { PopupOverlayTrigger } from './PopupOverlayTrigger';
/**
 *  @ngdoc component
 *  @name smarteditCommonsModule.component:PopupOverlayComponent
 *  @element se-popup-overlay
 *
 *  @description
 *  The PopupOverlay is meant to be a component that allows popups/overlays to be displayed attached to any element.
 *  The element that wrapped with PopupOverlay is applied to is called the anchor element. Once the popup is displayed, it is
 *  positioned relative to the anchor, depending on the configuration provided.
 *
 *  @param {< Object} popupOverlay A popup overlay configuration object that must contain either a template or a templateUrl.
 *  See {@link }smarteditCommonsModule.object:PopupOverlayConfig PopupOverlayConfig}
 *  @param {string} popupOverlay.template|templateUrl Deprecated, use popupOverlay.component. An html string template or a url to an html file
 *  @param {string =} [popupOverlay.halign='right'] Aligns the popup horizontally
 *      relative to the anchor (element). Accepts values: 'left' or 'right'.
 *  @param {string =} [popupOverlay.valign='bottom'] Aligns the popup vertically
 *      relative to the anchor (element). Accepts values: 'top' or 'bottom'.
 *  @param {@ string =} popupOverlayTrigger 'true'|'false'|'click' Controls when the overlay is displayed.
 *      If popupOverlayTrigger is true, the overlay is displayed, if false (or something other then true or click)
 *      then the overlay is hidden.
 *      If popupOverlayTrigger is 'click' then the overlay is displayed when the anchor (element) is clicked on
 *   @param {Object} popupOverlayData, an object that is accesible within legacy AngularJS component scope or can be injected with POPUP_OVERLAY_DATA token in Angular component
 *  @param {& expression =} popupOverlayOnShow An angular expression executed whenever this overlay is displayed
 *  @param {& expression =} popupOverlayOnHide An angular expression executed whenever this overlay is hidden
 *
 *
 *  @example
 *
 *  <se-popup-overlay
 *      [popupOverlay]="config"
 *      [popupOverlayTrigger]="true"
 *      [popupOverlayData]={ item: item }
 *      (popupOverlayOnShow)="handlePopupOverlayDisplayed()"
 *  >
 *      <se-anchor></se-anchor>
 *  </se-popup-overlay>
 */
export declare class PopupOverlayComponent {
    private injector;
    popupOverlay: PopupOverlayConfig;
    popupOverlayTrigger: PopupOverlayTrigger;
    popupOverlayData: TypedMap<any>;
    popupOverlayOnShow: EventEmitter<any>;
    popupOverlayOnHide: EventEmitter<any>;
    popover: any;
    isOpen: boolean;
    trigger: string[];
    appendTo: HTMLElement;
    popupOverlayInjector: Injector;
    constructor(injector: Injector);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    handleOpenChange(isOpen: boolean): void;
    handleOpen(): void;
    handleClose(): void;
    getPlacement(): Placement;
    private setTrigger;
    private getHorizontalAlign;
    private createInjector;
}
