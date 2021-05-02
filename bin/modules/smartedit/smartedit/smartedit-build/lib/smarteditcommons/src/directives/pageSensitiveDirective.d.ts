import { IEventService } from '@smart/utils';
/**
 * @ngdoc overview
 * @name pageSensitiveDirectiveModule
 * @description
 * This module defines the {@link pageSensitiveDirectiveModule.directive:pageSensitive pageSensitive} attribute directive.
 */
/**
 * @ngdoc directive
 * @name pageSensitiveDirectiveModule.directive:pageSensitive
 * @restrict A
 * @description
 * Will cause an Angular re-compilation of the node declaring this directive whenever the page identifier in smartEdit layer changes
 */
export declare class PageSensitiveDirective {
    private crossFrameEventService;
    hasContent: boolean;
    private unRegisterPageChangeListener;
    constructor(crossFrameEventService: IEventService);
    $onInit(): void;
    $onDestroy(): void;
}
