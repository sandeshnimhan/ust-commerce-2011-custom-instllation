import { IStorageManager } from '../IStorageManager';
import { IStorageManagerFactory } from '../IStorageManagerFactory';
/** @internal */
export declare class StorageManagerFactory implements IStorageManagerFactory {
    private theOneAndOnlyStorageManager;
    static ERR_INVALID_NAMESPACE(namespace: string): Error;
    constructor(theOneAndOnlyStorageManager: IStorageManager);
    getStorageManager(namespace: string): IStorageManager;
    private validateNamespace;
}
