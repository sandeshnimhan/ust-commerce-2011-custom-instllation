import * as angular from 'angular';
import { LogService } from '@smart/utils';
import { IPermissionService, SystemEventService } from '../../services';
import { HasOperationPermissionBaseDirective } from '../../directives/hasOperationPermission';
/**
 * @ngdoc directive
 * @name hasOperationPermission
 * @scope
 * @restrict A
 * @element ANY
 *
 * @deprecated since 2005, use {@link HasOperationPermissionDirective HasOperationPermissionDirective}
 * @description
 * Use this directive for AngularJS templates.
 *
 * For Angular components use {@link HasOperationPermissionDirective HasOperationPermissionDirective}
 */
export declare class LegacyHasOperationPermissionDirective extends HasOperationPermissionBaseDirective implements angular.IOnInit, angular.IOnChanges, angular.IOnDestroy {
    isPermissionGrantedFlag: boolean;
    constructor(systemEventService: SystemEventService, permissionService: IPermissionService, logService: LogService);
    $onInit(): void;
    $onChanges(changes: angular.IOnChangesObject): void;
    $onDestroy(): void;
    private getIsPermissionGrantedHandler;
}
