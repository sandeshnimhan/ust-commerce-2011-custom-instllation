/// <reference types="angular-mocks" />
import * as angular from 'angular';
import { YPopupOverlayDirective } from './yPopupOverlayDirective';
/**
 * @ngdoc service
 * @name yPopupOverlayModule.service:yPopupOverlayUtilsDOMCalculations
 *
 * @description
 * Contains some {@link yPopupOverlayModule.directive:yPopupOverlay yPopupOverlay} helper functions for
 * calculating positions and sizes on the DOM
 */
export declare class YPopupOverlayUtilsClickOrderService {
    private $document;
    private $log;
    private controllerRegistry;
    constructor($document: angular.IDocumentService, $log: angular.ILogService);
    register(instance: YPopupOverlayDirective): void;
    unregister(instance: YPopupOverlayDirective): void;
    private clickHandler;
    private getIndex;
}
