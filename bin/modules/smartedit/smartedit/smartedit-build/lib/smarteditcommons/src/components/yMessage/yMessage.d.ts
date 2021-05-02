/// <reference types="angular" />
/// <reference types="jquery" />
/// <reference types="eonasdan-bootstrap-datetimepicker" />
/**
 * @ngdoc overview
 * @name yMessageModule
 * @description
 * Deprecated since 2005. Use se-message (MessageComponent).
 * This module provides the yMessage component, which is responsible for rendering contextual
 * feedback messages for the user actions.
 *
 * @deprecated since 2005.
 */
/**
 *  @ngdoc directive
 *  @name yMessageModule.component:yMessage
 *  @scope
 *  @restrict E
 *  @element yMessage
 *
 *  @deprecated since 2005
 *  @description
 *  Deprecated since 2005. Use Use se-message (MessageComponent)
 *  This component provides contextual feedback messages for the user actions. To provide title and description for the yMessage
 *  use transcluded elements: message-title and message-description.
 *  @param {@String=} messageId Id for the component.
 *  @param {@String} type The type of the component (danger, info, success, warning). Default: info
 */
export declare class YMessageComponent {
    $element: JQuery;
    $compile: angular.ICompileService;
    private $scope;
    messageId: string;
    type: string;
    constructor($element: JQuery, $compile: angular.ICompileService, $scope: angular.IScope);
    $postLink(): void;
}
