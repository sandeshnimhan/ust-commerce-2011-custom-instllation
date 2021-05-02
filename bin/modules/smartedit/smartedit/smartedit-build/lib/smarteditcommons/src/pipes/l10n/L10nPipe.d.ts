import { PipeTransform } from '@angular/core';
import { TypedMap } from '@smart/utils';
import { Observable } from 'rxjs';
import { L10nService } from '../../services/L10nService';
export declare type L10nPipeFilterFn = (localizedMap: TypedMap<string> | string) => string;
/**
 * Pipe for translating localized maps for the current language.
 *
 * @example
 * ```
 * localizedMap = {
 *   en: 'dummyText in english',
 *   fr: 'dummyText in french'
 * };
 *
 * {{ localizedMap | seL10n | async }}
 *  ```
 */
export declare class L10nPipe implements PipeTransform {
    private l10nService;
    private filterFn;
    constructor(l10nService: L10nService);
    transform(localizedMap: string | TypedMap<string>): Observable<string>;
}
