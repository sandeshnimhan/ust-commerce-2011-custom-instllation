import { OnInit } from '@angular/core';
import { GenericEditorWidgetData } from '../../../genericEditor/types';
/**
 * Component responsible for generating custom toggle for the Generic Editor.
 *
 * The following is an example of a possible field structures that can be returned by the Structure API for seBoolean to work:
 * {
 *   cmsStructureType: "Boolean",
 *   qualifier: "someQualifier",
 *   i18nKey: 'i18nkeyForSomeQualifier',
 *   localized: false,
 *   defaultValue: true
 * }
 *
 * There is an optional property called defaultValue (which can be set to TRUE to enable the toggle by default)
 */
export declare class BooleanComponent implements OnInit {
    widget: GenericEditorWidgetData<any>;
    constructor(widget: GenericEditorWidgetData<any>);
    ngOnInit(): void;
}
