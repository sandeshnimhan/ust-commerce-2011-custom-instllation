import { IPermissionsRestServiceQueryData, IPermissionsRestServiceResult } from 'smarteditcommons/dtos';
import { RestServiceFactory } from '@smart/utils';
export declare class PermissionsRestService {
    private readonly URI;
    private readonly resource;
    constructor(restServiceFactory: RestServiceFactory);
    get(queryData: IPermissionsRestServiceQueryData): Promise<IPermissionsRestServiceResult>;
}
