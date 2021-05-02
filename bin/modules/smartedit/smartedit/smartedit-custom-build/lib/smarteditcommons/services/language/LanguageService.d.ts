import { BrowserService, IEventService, ILanguage, ILanguageServiceConstants, IRestService, IStorageService, LanguageService as SmartutilsLanguageService, LogService, PromiseUtils } from '@smart/utils';
import { TranslateService } from '@ngx-translate/core';
import { Injector } from '@angular/core';
/**
 * @ngdoc service
 * @name smarteditCommonsModule.service:LanguageService
 */
export declare class LanguageService extends SmartutilsLanguageService {
    protected logService: LogService;
    protected translateService: TranslateService;
    protected promiseUtils: PromiseUtils;
    protected eventService: IEventService;
    protected browserService: BrowserService;
    protected storageService: IStorageService;
    protected injector: Injector;
    protected languageServiceConstants: ILanguageServiceConstants;
    constructor(logService: LogService, translateService: TranslateService, promiseUtils: PromiseUtils, eventService: IEventService, browserService: BrowserService, storageService: IStorageService, injector: Injector, languageServiceConstants: ILanguageServiceConstants);
    /**
     * @ngdoc method
     * @name smarteditCommonsModule.service:LanguageService#getLanguagesForSite
     * @methodOf smarteditCommonsModule.service:LanguageService
     *
     * @description
     * Fetches a list of language descriptors for the specified storefront site UID.
     * The object containing the list of sites is fetched using REST calls to the cmswebservices languages API.
     *
     * @param {string} siteUID the site unique identifier.
     *
     * @returns {Promise<ILanguage[]>} A promise that resolves to an array of ILanguage.
     */
    getLanguagesForSite(siteUID: string): Promise<ILanguage[]>;
    protected readonly languageRestService: IRestService<{
        languages: ILanguage[];
    }>;
}
