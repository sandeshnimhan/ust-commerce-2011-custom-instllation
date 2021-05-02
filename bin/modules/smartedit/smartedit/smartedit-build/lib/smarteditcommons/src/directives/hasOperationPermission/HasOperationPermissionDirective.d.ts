import { OnChanges, OnDestroy, OnInit, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';
import { IPermissionService, LogService, MultiNamePermissionContext, SystemEventService } from '../../services';
import { HasOperationPermissionBaseDirective } from './HasOperationPermissionBaseDirective';
/**
 * @ngdoc directive
 * @name HasOperationPermissionDirective
 * @element [seHasOperationPermission]
 *
 * @description
 * An Authorization structural directive that conditionally will remove elements from the DOM if the user does not have authorization defined
 * by the input parameter permission keys.
 * This directive makes use of the {@link smarteditCommonsModule.service:PermissionServiceInterface IPermissionService}
 * service to validate if the current user has access to the given permission set.
 *
 * It takes a comma-separated list of permission names or an array of permission name objects structured as follows:
 * @example
 * 1. String
 * 'se-edit-page'
 *
 * 2. Object
 *  {
 *     names: ["permission1", "permission2"],
 *     context: {
 *         data: "with the context property, extra data can be included to check a permission when the Rule.verify function is called"
 *     }
 *  }
 *
 * @param {string | Object[]} [seHasOperationPermission] A comma-separated list of permission names or an array of permission name objects.
 */
export declare class HasOperationPermissionDirective extends HasOperationPermissionBaseDirective implements OnInit, OnDestroy, OnChanges {
    private templateRef;
    private viewContainerRef;
    seHasOperationPermission: string | MultiNamePermissionContext[];
    private hasView;
    constructor(templateRef: TemplateRef<any>, viewContainerRef: ViewContainerRef, systemEventService: SystemEventService, permissionService: IPermissionService, logService: LogService);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    private getIsPermissionGrantedHandler;
    private updateView;
}
