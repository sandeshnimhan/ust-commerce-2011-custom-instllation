/// <reference types="angular" />
/// <reference types="jquery" />
import { ElementRef, EventEmitter, OnDestroy, OnInit, Renderer2, TemplateRef } from '@angular/core';
import { SliderPanelConfiguration } from './interfaces';
import { SliderPanelServiceFactory } from './SliderPanelServiceFactory';
import { WindowUtils } from '../../utils';
/**
 * This object defines injectable Angular constants that store the CSS class names used in the controller to define the
 * rendering and animation of the slider panel.
 */
export declare const CSS_CLASSNAMES: {
    /**
     * The class name applied to the slide panel container to trigger the sliding action in the CSS animation.
     */
    SLIDERPANEL_ANIMATED: string;
    /**
     * A common prefix for the class names that defines how the content of the slider panel is to be rendered.
     */
    SLIDERPANEL_SLIDEPREFIX: string;
};
/**
 * The se-slider-panel Angular component allows for the dynamic display of any HTML content on a sliding panel.
 *
 * @example
 *  <se-slider-panel
 *      [(sliderPanelShow)]="onSliderPanelShow"
 *      [(sliderPanelHide)]="onSliderPanelHide"
 *      [sliderPanelConfiguration]="config"
 *   >
 *      <my-content></my-content>
 *  </se-slider-panel>
 */
export declare class SliderPanelComponent implements OnInit, OnDestroy {
    private renderer;
    private element;
    private windowUtils;
    private yjQuery;
    private sliderPanelServiceFactory;
    sliderPanelConfiguration: SliderPanelConfiguration;
    sliderPanelHide: () => Promise<any>;
    sliderPanelShow: () => Promise<any>;
    sliderPanelHideChange: EventEmitter<() => Promise<any>>;
    sliderPanelShowChange: EventEmitter<() => Promise<any>>;
    content: TemplateRef<any>;
    isShown: boolean;
    sliderPanelDismissAction: () => void;
    slideClassName: string;
    private sliderPanelService;
    private uniqueId;
    private inlineStyling;
    constructor(renderer: Renderer2, element: ElementRef, windowUtils: WindowUtils, yjQuery: JQueryStatic, sliderPanelServiceFactory: SliderPanelServiceFactory);
    ngOnInit(): void;
    ngOnDestroy(): void;
    hideSlider(): Promise<any>;
    showSlider(): Promise<any>;
    isSaveDisabled(): boolean;
    private addScreenResizeEventHandler;
}
