/**
 * @ngdoc overview
 * @name recompileDomModule
 * @description
 * This module defines the {@link recompileDomModule.directive:recompileDom recompileDom} component.
 */
/**
 * @ngdoc directive
 * @name recompileDomModule.directive:recompileDom
 * @restrict A
 * @requires $timeout
 * @param {= Function} recompileDom Function invoked from the outer scope to trigger the recompiling of the transcluded content.
 * @description
 * The recompile dom directive accepts a function param, and can be applied to any part of the dom.
 * Upon execution of the function, the inner contents of this dom is recompiled by Angular.
 */
export declare class RecompileDomDirective {
    showContent: boolean;
    recompileDom: () => void;
    $postLink(): void;
}
