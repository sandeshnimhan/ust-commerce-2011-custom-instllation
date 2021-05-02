/// <reference types="angular" />
/// <reference types="jquery" />
import { ElementRef } from '@angular/core';
import { DateTimePickerLocalizationService } from './DateTimePickerLocalizationService';
import { GenericEditorWidgetData } from '../../../genericEditor/types';
export declare class DateTimePickerComponent {
    widget: GenericEditorWidgetData<any>;
    private yjQuery;
    private dateTimePickerLocalizationService;
    placeholderText: string;
    dateTimePickerElement: ElementRef;
    constructor(widget: GenericEditorWidgetData<any>, yjQuery: JQueryStatic, dateTimePickerLocalizationService: DateTimePickerLocalizationService);
    ngAfterViewInit(): void;
    private handleDatePickerShow;
    private handleDatePickerChange;
    private readonly node;
    private readonly datetimepicker;
    private readonly isEditable;
}
