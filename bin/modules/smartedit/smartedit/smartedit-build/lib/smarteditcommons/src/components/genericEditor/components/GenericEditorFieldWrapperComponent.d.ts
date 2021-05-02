import { OnDestroy } from '@angular/core';
import { TabData } from '../../tabs';
import { FormField, FormGrouping } from '@smart/utils';
export declare class GenericEditorFieldWrapperComponent implements OnDestroy {
    form: FormField;
    private _subscription;
    constructor({ model: form, tabId, tab }: TabData<FormGrouping>);
    ngOnDestroy(): void;
}
