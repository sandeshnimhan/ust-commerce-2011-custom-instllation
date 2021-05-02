import { Type } from '@angular/core';
import { GenericEditorWidgetData } from '../../types';
import { FetchAllStrategy, ItemComponentData, SelectItem } from '../../../../components/select';
export declare class EnumItemPrinterComponent {
    data: ItemComponentData;
    constructor(data: ItemComponentData);
}
export declare class EnumComponent {
    data: GenericEditorWidgetData<any>;
    itemComponent: Type<any>;
    fetchStrategy: {
        fetchAll: FetchAllStrategy<SelectItem>;
    };
    constructor(data: GenericEditorWidgetData<any>);
}
