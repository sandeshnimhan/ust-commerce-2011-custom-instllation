import { GenericEditorInfo } from '../../types';
import { GenericEditorStackService } from '../../services';
import { GenericEditorComponent } from '../../GenericEditorComponent';
import './genericEditorBreadcrumb.scss';
/**
 * @ngdoc overview
 * @name genericEditorBreadcrumbModule
 *
 * @description
 * This module provides the genericEditorBreadcrumbModule component, which is used to show a breadcrumb on top of the generic editor
 * when there is more than one editor opened on top of each other. This will happen when editing nested components.
 */
/**
 * @ngdoc directive
 * @name genericEditorBreadcrumbModule.component:genericEditorBreadcrumb
 * @element generic-editor-breadcrumb
 *
 * @description
 * Component responsible for rendering a breadcrumb on top of the generic editor.
 * @param {< String} editorStackId The string that identifies the stack of editors being edited together.
 */
export declare class GenericEditorBreadcrumbComponent {
    private genericEditorStackService;
    private ge;
    private editorsStack;
    constructor(genericEditorStackService: GenericEditorStackService, ge: GenericEditorComponent);
    getEditorsStack(): GenericEditorInfo[];
    showBreadcrumb(): boolean;
    getComponentName(breadcrumbItem: GenericEditorInfo): any;
}
