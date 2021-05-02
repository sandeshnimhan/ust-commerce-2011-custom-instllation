/// <reference types="angular-animate" />
/// <reference types="angular-mocks" />
/// <reference types="jquery" />
/// <reference types="eonasdan-bootstrap-datetimepicker" />
import * as angular from 'angular';
import { SliderPanelConfiguration } from '../interfaces';
import { SliderPanelServiceFactory } from '../SliderPanelServiceFactory';
/**
 * @ngdoc object
 * @name sliderPanelModule.object:CSS_CLASSNAMES
 * @description
 * This object defines injectable Angular constants that store the CSS class names used in the controller to define the
 * rendering and animation of the slider panel.
 */
export declare const CSS_CLASSNAMES: {
    /**
     * @ngdoc property
     * @name SLIDERPANEL_ANIMATED {String}
     * @propertyOf sliderPanelModule.object:CSS_CLASSNAMES
     *
     * @description
     * The class name applied to the slide panel container to trigger the sliding action in the CSS animation.
     */
    SLIDERPANEL_ANIMATED: string;
    /**
     * @ngdoc property
     * @name SLIDERPANEL_SLIDEPREFIX {String}
     * @propertyOf sliderPanelModule.object:CSS_CLASSNAMES
     *
     * @description
     * A common prefix for the class names that defines how the content of the slider panel is to be rendered.
     */
    SLIDERPANEL_SLIDEPREFIX: string;
};
/**
 * @ngdoc overview
 * @name sliderPanelModule
 * @requires sliderPanelServiceModule
 * @requires ngAnimate
 * @description
 * This module defines the slider panel Angular component and its associated constants and controller.
 *
 * ## Basic Implementation
 *
 * To define a new slider panel, you must make some basic modifications to your Angular module and controller, as well
 * as to your HTML template.
 *
 * - ### Angular Module
 *
 * You must add the sliderPanelModule as a dependency to your Angular module.
 *
 * <pre>
 * angular.module('yourApp', ['sliderPanelModule']) { ... }
 * </pre>
 *
 * - ### Angular Controller
 *
 * Within the Angular controller, you must add a function to be instantiated so that the controller will trigger the
 * display of the slider panel.
 * <pre>
 * angular.module('yourApp', ['sliderPanelModule'])
 * .controller('yourController', function() {
 *    ...
 *    this.showSliderPanel = function() {};
 *   ...
 * });
 * </pre>
 *
 * - ### HTML template
 *
 * To include HTML content in the slider panel, you must embed the HTML content in a `<y-slider-panel> </y-slider-panel>` tag.<br />
 * For more information, see the definition of {@link sliderPanelModule.directive:ySliderPanel ySliderPanel} Angular component.
 *
 * <pre>
 * <y-slider-panel data-slider-panel-show="$ctrl.sliderPanelShow">
 *   <content>
 *       any HTML content
 *   </content>
 * </y-slider-panel>
 * </pre>
 *
 * You can then make the slider panel visible by calling the "Show Slider Panel" function defined in the associated controller; for example:
 *
 * <pre>
 * <button class="btn btn-default" ng-click="$ctrl.sliderPanelShow();">
 * Show Slider Panel
 * </button>
 * </pre>
 *
 * ## Advanced Configurations
 *
 * A default set of configurations is applied to all slider panels. You can overwrite and update the default configuration.
 *
 * To update the configuration of a specific slider panel, you must instantiate a JSON object that contains the expected
 * configuration in the Angular controller and provide it to the slider panel controller using the HTML template, for example:
 *
 * <pre>
 *      <y-slider-panel ... data-slider-panel-configuration="$ctrl.sliderPanelConfiguration">
 * </pre>
 *
 * If you define this type of configuration set, SmartEdit will automatically merge it with the slider panel's default configuration.
 * For information about the available settings, see the SliderPanelService.getNewServiceInstance method.
 */
/**
 * @ngdoc directive
 * @name sliderPanelModule.directive:ySliderPanel
 * @restrict E
 * @deprecated since 2005
 * @param {Object} dataSliderPanelConfiguration (optional) A JSON object containing the configuration to be applied on slider panel.
 * @param {Function} dataSliderPanelHide (optional) A function shared in a two ways binding by the main controller and the slider panel and used to trigger the hiding of the slider panel.
 * @param {Function} dataSliderPanelShow A function shared in a two ways binding by the main controller and the slider panel and used to trigger the display of the slider panel.
 * @description
 * Deprecated, use se-slider-panel.
 * The ySliderPanel Angular component allows for the dynamic display of any HTML content on a sliding panel.
 */
export declare class YSliderPanelComponent {
    private $animate;
    private $element;
    private $timeout;
    private $window;
    private yjQuery;
    private sliderPanelServiceFactory;
    sliderPanelConfiguration: SliderPanelConfiguration;
    sliderPanelHide: () => angular.IPromise<any>;
    sliderPanelShow: () => angular.IPromise<any>;
    isShown: boolean;
    sliderPanelDismissAction: () => void;
    slideClassName: string;
    private sliderPanelService;
    private uniqueId;
    private inlineStyling;
    constructor($animate: angular.animate.IAnimateService, $element: JQuery, $timeout: angular.ITimeoutService, $window: angular.IWindowService, yjQuery: JQueryStatic, sliderPanelServiceFactory: SliderPanelServiceFactory);
    $onInit(): void;
    $onDestroy(): void;
    hideSlider(): angular.IPromise<any>;
    showSlider(): angular.IPromise<any>;
    isSaveDisabled(): boolean;
    private addScreenResizeEventHandler;
}
