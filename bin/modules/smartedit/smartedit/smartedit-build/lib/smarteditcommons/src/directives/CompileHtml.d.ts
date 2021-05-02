import * as angular from 'angular';
export interface CompileHtmlNgController {
    /**
     * Argument of "ng-controller" directive, defining an alias by which a controller can be referenced in the template
     *
     * ng-controller="ctrl as $ctrlAlias"
     */
    alias: string;
    /**
     * Controller constructor function or an array containing string providers and controller constructor function as a last element
     *
     * @example
     * value: function ctrl() {
     *   this.taskName = 'Translation (DE)';
     * }
     *
     * value: [
     *   'experienceService',
     *    function(experienceService) {
     *      // can access experienceService
     *    }
     * ]
     */
    value: angular.IControllerConstructor | any[];
}
export interface DynamicScope extends angular.IScope {
    [key: string]: any;
}
