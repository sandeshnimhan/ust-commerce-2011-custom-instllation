import { ContentManager } from './ContentManager';
/**
 * @ngdoc directive
 * @name GenericEditorModule.component:SubmitButtonDirective
 * @element [seSubmitBtn]
 *
 * @description
 * Applied on a DOM element, this Directive will trigger a submit of the data stored in
 * the parent {@link GenericEditorModule.directive:ContentManager ContentManager} upon cliking.
 * usage example:
 * ```
 * <form [contentManager]="{onSave: editor.someSubmit}">
 *      <button [seSubmitBtn]="editor.isSubmitDisabled">Submit </button>
 * </form>
 * ```
 * @param {= () => boolean = } seSubmitBtn The optional callback returning a boolean to add more cases for disablement
 */
export declare class SubmitBtnDirective {
    private cm;
    isDisabled: () => boolean;
    constructor(cm: ContentManager<any>);
    /**
     * Modifies the disabled attribute to be disabled when saving.
     */
    readonly disabled: boolean;
    /**
     * When the element is clicked the save operation is called in the content manager direcitve.
     */
    save($event: Event): void;
}
