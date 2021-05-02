import { Injector, SimpleChanges, Type } from '@angular/core';
import { SelectComponent } from '../SelectComponent';
import { SelectItem } from '../interfaces';
import { ItemComponentData } from './interfaces';
/**
 * Component represents options and selected options of `SelectComponent`.
 * Displays an Item Component which can have access to exposed values via `ITEM_COMPONENT_DATA_TOKEN` Injection Token.
 *
 * @internal
 */
export declare class ItemPrinterComponent<T extends SelectItem> {
    private injector;
    item: T;
    component: Type<any>;
    selectComponentCtx: SelectComponent<T>;
    isSelected: boolean;
    componentInjector: Injector;
    itemComponentData: ItemComponentData;
    constructor(injector: Injector);
    ngOnChanges(changes: SimpleChanges): void;
    private createItemComponentData;
    private createItemComponentInjector;
}
