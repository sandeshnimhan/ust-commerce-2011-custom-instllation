import { UpgradeModule } from '@angular/upgrade/static';
import { IAuthenticationManagerService } from '@smart/utils';
export declare class AuthenticationManager extends IAuthenticationManagerService {
    private upgrade;
    constructor(upgrade: UpgradeModule);
    private readonly $route;
    private readonly $location;
    onLogout(): void;
    onUserHasChanged(): void;
}
