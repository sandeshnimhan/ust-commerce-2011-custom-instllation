import { ElementRef, InjectionToken, Injector, OnDestroy } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { Payload } from '@smart/utils';
import { GenericEditorComponent } from '../GenericEditorComponent';
import { GenericEditorField, GenericEditorWidgetData, IGenericEditor } from '../types';
export interface GenericEditorFieldComponentScope<T = {}, D = {}> extends GenericEditorWidgetData<D> {
    editor?: IGenericEditor;
    id: string;
    editorStackId: string;
    $ctrl?: GenericEditorFieldComponent<T>;
}
export declare const GENERIC_EDITOR_WIDGET_DATA: InjectionToken<unknown>;
export declare class GenericEditorFieldComponent<T> implements ControlValueAccessor, OnDestroy {
    private elementRef;
    private injector;
    ge: GenericEditorComponent;
    field: GenericEditorField;
    model: Payload;
    qualifier: string;
    id: string;
    geWidget: ElementRef;
    widgetInjector: Injector;
    private _onChange;
    private _onTouched;
    private _unWatch;
    constructor(elementRef: ElementRef, injector: Injector, ge: GenericEditorComponent);
    writeValue(value: Payload): void;
    registerOnChange(fn: (value: Payload) => void): void;
    registerOnTouched(fn: () => void): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngAfterViewInit(): void;
    /**
     * @internal
     *
     * This method is used to check if the field is disabled. If the field is not localized,
     * then it's the same as field.enabled. However, if the field is localized, then this
     * method will return a different result for each language. For example, this allows to
     * have 'en' disabled but 'fr' disabled, depending on language permissions.
     *
     */
    isFieldDisabled(): boolean;
    private createInjector;
}
