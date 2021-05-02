import { IStorage } from './IStorage';
import { IStorageOptions } from './IStorageOptions';
import { Cloneable } from '@smart/utils';
export declare abstract class IStorageGateway {
    handleStorageRequest(storageConfiguration: IStorageOptions, method: keyof IStorage<Cloneable, Cloneable>, args: Cloneable[]): Promise<any>;
}
