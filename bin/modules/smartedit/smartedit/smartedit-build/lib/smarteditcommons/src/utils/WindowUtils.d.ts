/// <reference types="angular-mocks" />
import * as angular from 'angular';
import * as lodash from 'lodash';
import { NgZone } from '@angular/core';
import { YJQuery } from 'smarteditcommons/services';
import { WindowUtils as ParentWindowUtils } from '@smart/utils';
declare global {
    interface Window {
        Zone: any;
        angular: angular.IAngularStatic;
        CKEDITOR: any;
        smarteditLodash: lodash.LoDashStatic;
        smarteditJQuery: YJQuery;
        __karma__: any;
        pushModules(...modules: any[]): void;
    }
}
/**
 * @ngdoc service
 * @name functionsModule.service:WindowUtils
 *
 * @description
 * A collection of utility methods for windows.
 */
export declare class WindowUtils extends ParentWindowUtils {
    static SMARTEDIT_IFRAME_ID: string;
    private trustedIframeDomain;
    constructor(ngZone?: NgZone);
    /**
     * @ngdoc method
     * @name functionsModule.service:WindowUtils#getGatewayTargetFrame
     * @methodOf functionsModule.service:WindowUtils
     *
     * @description
     * Given the current frame, retrieves the target frame for gateway purposes
     *
     * @returns {Window} The content window or null if it does not exists.
     */
    getGatewayTargetFrame: () => Window;
    getSmarteditIframe(): HTMLElement;
    getIframe(): HTMLElement;
    setTrustedIframeDomain(trustedIframeSource: string): void;
    getTrustedIframeDomain(): string;
    isCrossOrigin(location: string): boolean;
}
export declare const windowUtils: WindowUtils;
