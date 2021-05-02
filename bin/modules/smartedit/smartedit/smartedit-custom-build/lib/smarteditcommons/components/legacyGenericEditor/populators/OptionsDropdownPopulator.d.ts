import * as lo from 'lodash';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../../../services/language/LanguageService';
import { DropdownPopulatorInterface } from './DropdownPopulatorInterface';
import { DropdownPopulatorPayload } from '..';
import { GenericEditorOption } from '../../genericEditor/types';
/**
 * @ngdoc service
 * @name dropdownPopulatorModule.service:optionsDropdownPopulator
 * @description
 * implementation of {@link dropdownPopulatorModule.DropdownPopulatorInterface DropdownPopulatorInterface} for "EditableDropdown" cmsStructureType
 * containing options attribute.
 */
export declare class OptionsDropdownPopulator extends DropdownPopulatorInterface {
    languageService: LanguageService;
    translateService: TranslateService;
    constructor(lodash: lo.LoDashStatic, languageService: LanguageService, translateService: TranslateService);
    /**
     * @ngdoc method
     * @name dropdownPopulatorModule.service:optionsDropdownPopulator#populate
     * @methodOf dropdownPopulatorModule.service:optionsDropdownPopulator
     *
     * @description
     * Implementation of the {@link dropdownPopulatorModule.DropdownPopulatorInterface#populate DropdownPopulatorInterface.populate} method
     */
    populate(payload: DropdownPopulatorPayload): Promise<GenericEditorOption[]>;
}
