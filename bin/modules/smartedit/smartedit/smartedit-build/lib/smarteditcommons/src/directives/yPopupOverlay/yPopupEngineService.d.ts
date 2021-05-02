/// <reference types="angular-mocks" />
import * as angular from 'angular';
import { YPopoverConfig, YPopoverOnClickOutside, YPopoverTrigger } from '../../components/popover/yPopoverDirective';
import Popper from 'popper.js';
export interface YPopupOverlayEvent {
    event: string;
    handle: (event: Event) => void;
}
export interface YPopupOverlayScope extends angular.IScope {
    closePopupOverlay: () => void;
}
export declare type YPopupOverlayTrigger = YPopoverTrigger | string | boolean;
export interface YPopupEngineConfig {
    onCreate: (conf: Popper.Data) => void;
    onUpdate: (conf: Popper.Data) => void;
    placement: Popper.Placement;
    modifiers: Popper.Modifiers;
    trigger: YPopupOverlayTrigger;
    onClickOutside: YPopoverOnClickOutside;
}
export interface YPopupOverlayEvent {
    event: string;
    handle: (event: Event) => void;
}
export interface IYPopupEngine {
    show(): void;
    configure(conf: YPopoverConfig): void;
    hide(): void;
    setTrigger(newTrigger: YPopupOverlayTrigger): void;
    dispose(): void;
}
/**
 * @ngdoc service
 * @name yPopupOverlayModule.service:yPopupEngine
 * @description
 * Service that positions a template relative to an anchor element.
 */
export declare class YPopupEngineService {
    constructor($document: angular.IDocumentService, $compile: angular.ICompileService, $timeout: angular.ITimeoutService);
}
