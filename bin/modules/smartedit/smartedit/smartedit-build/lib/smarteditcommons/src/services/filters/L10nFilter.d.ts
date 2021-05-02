import { TypedMap } from '@smart/utils';
import { LanguageService } from '../language/LanguageService';
import { CrossFrameEventService } from '../crossFrame/CrossFrameEventService';
import { L10nPipeFilterFn } from '../../pipes/l10n/L10nPipe';
export interface L10nFilterFn extends L10nPipeFilterFn {
    $stateful: boolean;
}
export declare function setupL10nFilter(languageService: LanguageService, crossFrameEventService: CrossFrameEventService): (localizedMap: string | TypedMap<string>) => string;
/**
 * @ngdoc filter
 * @name smarteditCommonsModule.filter:l10n
 * @description
 * Filter that accepts a localized map as input and returns the value corresponding to the resolvedLocale of {@link smarteditCommonsModule} and defaults to the first entry.
 * @deprecated since 2005, use `L10nPipe`
 *
 * @param {TypedMap<string>} localizedMap the map of language isocodes / values
 * This class serves as an interface and should be extended, not instantiated.
 *
 */
export declare class L10nFilter {
    static transform(languageService: LanguageService, crossFrameEventService: CrossFrameEventService): (localizedMap: TypedMap<string> | string) => TypedMap<string> | string;
}
