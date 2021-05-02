import * as angular from 'angular';
import { ITranslationsFetchService, TranslationMap } from '@smart/utils';
export declare function $translateStaticFilesLoader($q: angular.IQService, translationsFetchService: ITranslationsFetchService): (option: {
    key: string;
}) => angular.IPromise<TranslationMap>;
