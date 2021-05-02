import { ISessionService, LogService } from '@smart/utils';
import { PermissionsRestService } from './rest';
/**
 * @ngdoc service
 * @name smarteditCommonsModule.service.AuthorizationService
 *
 * @description
 * This service makes calls to the Global Permissions REST API to check if the current user was
 * granted certain permissions.
 */
export declare class AuthorizationService {
    private logService;
    private sessionService;
    private permissionsRestService;
    constructor(logService: LogService, sessionService: ISessionService, permissionsRestService: PermissionsRestService);
    /**
     * @ngdoc method
     * @name smarteditCommonsModule.service.AuthorizationService#hasGlobalPermissions
     * @methodOf smarteditCommonsModule.service.AuthorizationService
     *
     * @description
     * This method checks if the current user is granted the given global permissions.
     *
     * @param {String[]} permissionNames The list of global permissions to check.
     *
     * @return {Boolean} true if the user is granted all of the given permissions, false otherwise
     *
     * @throws Will throw an error if the permissionNames array is empty
     */
    hasGlobalPermissions(permissionNames: string[]): Promise<boolean>;
    private getPermissionResult;
    private mergePermissionResults;
    private getPermissions;
}
