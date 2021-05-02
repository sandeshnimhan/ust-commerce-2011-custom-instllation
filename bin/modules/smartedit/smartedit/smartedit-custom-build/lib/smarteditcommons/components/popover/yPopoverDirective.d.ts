/// <reference types="angular-mocks" />
/// <reference types="jquery" />
/// <reference types="eonasdan-bootstrap-datetimepicker" />
import * as angular from 'angular';
import * as popper from 'popper.js';
export declare enum YPopoverTrigger {
    Hover = "hover",
    Click = "click",
    Focus = "focus",
    OutsideClick = "outsideClick",
    None = "none"
}
export declare enum YPopoverOnClickOutside {
    Close = "close",
    None = "none"
}
export interface YPopoverConfig {
    placement: popper.Placement;
    trigger: YPopoverTrigger;
    container: string | HTMLElement;
    onShow: () => void;
    onHide: () => void;
    onChanges: (element: HTMLElement, data: popper.Data) => void;
    onClickOutside?: YPopoverOnClickOutside.Close;
    modifiers?: popper.Modifiers;
}
export interface YPopoverScope extends angular.IScope {
    template: string;
    placement: popper.Placement;
    title: string;
}
/**
 * @ngdoc directive
 * @name yPopoverModule.directive:yPopover
 * @scope
 * @restrict A
 *
 * @description
 * This directive attaches a customizable popover on a DOM element.
 * @param {<String=} template the HTML body to be used in the popover body, it will automatically be trusted by the directive. Optional but exactly one of either template or templateUrl must be defined.
 * @param {<String=} templateUrl the location of the HTML template to be used in the popover body. Optional but exactly one of either template or templateUrl must be defined.
 * @param {<String=} title the title to be used in the popover title section. Optional.
 * @param {<String=} placement the placement of the popover around the target element. Possible values are <b>top, left, right, bottom</b>, as well as any
 * concatenation of them with the following format: placement1-placement2 such as bottom-right. Optional, default value is top.
 * @param {=String=} trigger the event type that will trigger the popover. Possibles values are <b>hover, click, outsideClick, none</b>. Optional, default value is 'click'.
 */
export declare class YPopoverDirective {
    private $scope;
    private $timeout;
    private $element;
    private yjQuery;
    private $templateCache;
    private yPopupEngineService;
    private $transclude;
    title?: string;
    template: string;
    placement?: popper.Placement;
    private transcludedContent;
    private transclusionScope;
    private engine;
    private config;
    private templateUrl?;
    private trigger?;
    private isOpen?;
    private previousIsOpen;
    constructor($scope: YPopoverScope, $timeout: angular.ITimeoutService, $element: JQuery<Element>, yjQuery: JQueryStatic, $templateCache: angular.ITemplateCacheService, yPopupEngineService: any, $transclude: angular.ITranscludeFunction);
    $onInit(): void;
    $doCheck(): void;
    $onChanges(): void;
    $onDestroy(): void;
    getTemplate(): string;
}
