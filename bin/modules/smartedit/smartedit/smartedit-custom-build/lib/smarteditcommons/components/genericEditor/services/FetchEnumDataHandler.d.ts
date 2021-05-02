import { RestServiceFactory } from '@smart/utils';
import { IFetchDataHandler } from './IFetchDataHandler';
import { GenericEditorField } from '../types';
export declare class FetchEnumDataHandler implements IFetchDataHandler {
    private restServiceFactory;
    static resetForTests(): void;
    private static cache;
    private restServiceForEnum;
    constructor(restServiceFactory: RestServiceFactory);
    findByMask(field: GenericEditorField, search?: string): Promise<string[]>;
    getById(field: GenericEditorField, identifier: string): Promise<string>;
}
