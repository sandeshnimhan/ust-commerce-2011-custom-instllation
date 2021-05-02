import { EventEmitter, TemplateRef, ViewContainerRef } from '@angular/core';
import { Observable } from 'rxjs';
import { Payload } from '@smart/utils';
import { GenericEditorSchema } from '../../types';
import { GenericEditorStateBuilderService } from '../../services/GenericEditorStateBuilderService';
import { GenericEditorState } from '../../models';
export declare class FormBuilderDirective {
    private templateRef;
    private viewContainer;
    private stateBuilderService;
    formBuilder: {
        data$: Observable<Payload>;
        schema$: Observable<GenericEditorSchema>;
    };
    stateCreated: EventEmitter<GenericEditorState>;
    private _subscription;
    constructor(templateRef: TemplateRef<any>, viewContainer: ViewContainerRef, stateBuilderService: GenericEditorStateBuilderService);
    ngOnDestroy(): void;
    private _onDataStream;
}
