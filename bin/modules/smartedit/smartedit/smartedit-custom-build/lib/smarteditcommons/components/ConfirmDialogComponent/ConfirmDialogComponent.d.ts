import { Observable } from 'rxjs';
import { FundamentalModalManagerService, TypedMap } from '@smart/utils';
export declare class ConfirmDialogComponent {
    private modalManager;
    constructor(modalManager: FundamentalModalManagerService);
    readonly modalData: Observable<any>;
    readonly descriptionPlaceholders: Observable<TypedMap<string>>;
}
