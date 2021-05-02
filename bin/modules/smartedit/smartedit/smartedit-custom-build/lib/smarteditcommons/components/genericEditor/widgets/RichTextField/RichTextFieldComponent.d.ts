import { AfterViewInit, OnDestroy } from '@angular/core';
import { TypedMap } from '@smart/utils';
import { GenericEditorSanitizationService } from './services/GenericEditorSanitizationService';
import { GenericEditorWidgetData } from '../../../genericEditor/types';
import { RichTextLoaderService } from './services/RichTextLoaderService';
import { RichTextFieldLocalizationService } from './services/RichTextFieldLocalizationService';
import { SettingsService } from 'smarteditcommons/services';
export declare class RichTextFieldComponent implements AfterViewInit, OnDestroy {
    widget: GenericEditorWidgetData<any>;
    private seRichTextLoaderService;
    private seRichTextConfiguration;
    private genericEditorSanitizationService;
    private seRichTextFieldLocalizationService;
    private settingsService;
    private textarea;
    private mode;
    private editorInstance;
    constructor(widget: GenericEditorWidgetData<any>, seRichTextLoaderService: RichTextLoaderService, seRichTextConfiguration: TypedMap<any>, genericEditorSanitizationService: GenericEditorSanitizationService, seRichTextFieldLocalizationService: RichTextFieldLocalizationService, settingsService: SettingsService);
    ngAfterViewInit(): Promise<void>;
    ngOnDestroy(): void;
    onChange(): void;
    onMode(): void;
    onInstanceReady(ev: any): void;
    requiresUserCheck(): boolean;
    reassignUserCheck(): void;
}
