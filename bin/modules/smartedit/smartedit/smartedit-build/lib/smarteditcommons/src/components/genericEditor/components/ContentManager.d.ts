import { EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
/**
 * @ngdoc directive
 * @name GenericEditorModule.directive:ContentManager
 *
 * @description
 * Directive solely responsible for handling the submitting of its current data state to
 * an onSave input method and notifying of success and failure.
 *
 * example of usage:
 * ```
 * <form
 *  [contentManager]="{onSave: editor.submit$}"
 *  (onSuccess)="editor.onSuccess($event)"
 *  (onError)="editor.onFailure($event)"
 *  >
 * </form>
 * ```
 * @param {<  Microsyntax =} option object containing the onSave method of type (data: T) => Observable<T>
 * @param {< EventEmitter =} onSuccess outputs the successful result of onSave invocation
 * @param {< EventEmitter =} onError outputs the failing result of onSave invocation
 */
export declare class ContentManager<T> {
    option: {
        onSave: () => Observable<T>;
    };
    /**
     * Called when a saving is a success.
     */
    onSuccess: EventEmitter<T>;
    /**
     * Called when there is an error after saving.
     */
    onError: EventEmitter<any>;
    /**
     * Submitting state of the manager.
     *
     * @type {boolean}
     */
    submitting: boolean;
    save(): Observable<T>;
}
