import { TypedMap } from '@smart/utils';
import { BehaviorSubject } from 'rxjs';
import { ContextualMenu, IContextualMenuButton } from './IContextualMenuButton';
import { IContextualMenuConfiguration } from 'smarteditcommons/services/interfaces/IContextualMenuConfiguration';
export declare abstract class IContextualMenuService {
    onContextualMenuItemsAdded: BehaviorSubject<string>;
    addItems(contextualMenuItemsMap: TypedMap<IContextualMenuButton[]>): void;
    removeItemByKey(itemKey: string): void;
    containsItem(itemKey: string): boolean;
    getContextualMenuByType(componentType: string): IContextualMenuButton[];
    refreshMenuItems(): void;
    getContextualMenuItems(configuration: IContextualMenuConfiguration): Promise<ContextualMenu>;
}
