import * as lo from 'lodash';
import { TranslateService } from '@ngx-translate/core';
import { DropdownPopulatorFetchPageResponse, DropdownPopulatorItemPayload, DropdownPopulatorPagePayload, DropdownPopulatorPayload, IDropdownPopulator } from '../';
import { GenericEditorOption } from '../../genericEditor/types';
import { LanguageService } from '../../../services/language/LanguageService';
/**
 * @ngdoc service
 * @name dropdownPopulatorModule.DropdownPopulatorInterface
 *
 * @description
 * Interface describing the contract of a DropdownPopulator fetched through dependency injection by the
 * {@link GenericEditorModule.service:GenericEditorFactoryService GenericEditorFactoryService} to populate the dropdowns of {@link seDropdownModule.directive:seDropdown seDropdown}.
 */
export declare class DropdownPopulatorInterface implements IDropdownPopulator {
    lodash: lo.LoDashStatic;
    languageService: LanguageService;
    translateService?: TranslateService;
    constructor(lodash: lo.LoDashStatic, languageService: LanguageService, translateService?: TranslateService);
    getItem(payload: DropdownPopulatorItemPayload): Promise<GenericEditorOption>;
    /**
     * @ngdoc method
     * @name dropdownPopulatorModule.DropdownPopulatorInterface#populate
     * @methodOf dropdownPopulatorModule.DropdownPopulatorInterface
     * @description
     * Will returns a promise resolving to a list of items.
     * this method is deprecated, use {@link dropdownPopulatorModule.DropdownPopulatorInterface#fetchAll, fetchAll}.
     * @param {Object} payload contains the field, model and additional attributes.
     * @param {Object} payload.field The field descriptor from {@link GenericEditorModule.service:GenericEditorFactoryService GenericEditorFactoryService} containing information about the dropdown.
     * @param {Object} payload.model The full model being edited in {@link GenericEditorModule.service:GenericEditorFactoryService GenericEditorFactoryService}.
     * @param {Object} payload.selection The object containing the full option object that is now selected in a dropdown that we depend on (Optional, see dependsOn property in {@link seDropdownModule.directive:seDropdown seDropdown}).
     * @param {String} payload.search The search key when the user types in the dropdown (optional).
     * @returns {GenericEditorOption[]} a list of objects.
     */
    populate(payload: DropdownPopulatorPayload): PromiseLike<GenericEditorOption[]>;
    /**
     * @ngdoc method
     * @name dropdownPopulatorModule.DropdownPopulatorInterface#fetchAll
     * @methodOf dropdownPopulatorModule.DropdownPopulatorInterface
     * @deprecated
     * @description
     * Will returns a promise resolving to a list of items.
     * The items must all contain a property <b>id</b>.
     * @param {Object} payload contains the field, model and additional attributes.
     * @param {String} payload.field.options The original array of options (used by {@link dropdownPopulatorModule.service:optionsDropdownPopulator optionsDropdownPopulator})
     * @param {String} payload.field.uri The uri used to make a rest call to fetch data (used by {@link dropdownPopulatorModule.service:uriDropdownPopulator uriDropdownPopulator})
     * @param {Object} payload.field The field descriptor from {@link GenericEditorModule.service:GenericEditorFactoryService GenericEditorFactoryService} containing information about the dropdown.
     * @param {String} payload.field.dependsOn A comma separated list of attributes to include from the model when building the request params
     * @param {String} payload.field.idAttribute The name of the attribute to use when setting the id attribute
     * @param {String} payload.field.labelAttributes A list of attributes to use when setting the label attribute
     * @param {Object} payload.model The full model being edited in {@link GenericEditorModule.service:GenericEditorFactoryService GenericEditorFactoryService}.
     * @param {Object} payload.selection The object containing the full option object that is now selected in a dropdown that we depend on (Optional, see dependsOn property in {@link seDropdownModule.directive:seDropdown seDropdown}).
     * @param {String} payload.search The search key when the user types in the dropdown (optional).
     * @returns {GenericEditorOption[]} a list of objects.
     */
    fetchAll(payload: DropdownPopulatorPayload): Promise<GenericEditorOption[]>;
    /**
     * @ngdoc method
     * @name dropdownPopulatorModule.DropdownPopulatorInterface#fetchPage
     * @methodOf dropdownPopulatorModule.DropdownPopulatorInterface
     *
     * @description
     * Will returns a promise resolving to a {@link Page.object:Page page} of items.
     * The items must all contain a property <b>id</b>.
     * @param {Object} payload contains the field, model and additional attributes.
     * @param {Object} payload.field The field descriptor from {@link GenericEditorModule.service:GenericEditorFactoryService GenericEditorFactoryService} containing information about the dropdown.
     * @param {String} payload.field.options The original array of options (used by {@link dropdownPopulatorModule.service:optionsDropdownPopulator optionsDropdownPopulator})
     * @param {String} payload.field.uri The uri used to make a rest call to fetch data (used by {@link dropdownPopulatorModule.service:uriDropdownPopulator uriDropdownPopulator})
     * @param {String} payload.field.dependsOn A comma separated list of attributes to include from the model when building the request params
     * @param {String} payload.field.idAttribute The name of the attribute to use when setting the id attribute
     * @param {String} payload.field.labelAttributes A list of attributes to use when setting the label attribute
     * @param {Object} payload.field.params An object containing properties to append as query string while making a call.
     * @param {Object} payload.model The full model being edited in {@link GenericEditorModule.service:GenericEditorFactoryService GenericEditorFactoryService}.
     * @param {Object} payload.selection The object containing the full option object that is now selected in a dropdown that we depend on (Optional, see dependsOn property in {@link seDropdownModule.directive:seDropdown seDropdown}).
     * @param {String} payload.search The search key when the user types in the dropdown (optional).
     * @param {String} payload.pageSize number of items in the page.
     * @param {String} payload.currentPage current page number.
     * @returns {Object} a {@link Page.object:Page page}
     */
    fetchPage(payload: DropdownPopulatorPagePayload): Promise<DropdownPopulatorFetchPageResponse>;
    /**
     * @ngdoc method
     * @name dropdownPopulatorModule.DropdownPopulatorInterface#isPaged
     * @methodOf dropdownPopulatorModule.DropdownPopulatorInterface
     *
     * @description
     * Specifies whether this populator is meant to work in paged mode as opposed to retrieve lists. Optional, default is false
     */
    isPaged(): boolean;
    /**
     * @ngdoc method
     * @name dropdownPopulatorModule.DropdownPopulatorInterface#populateAttributes
     * @methodOf dropdownPopulatorModule.DropdownPopulatorInterface
     *
     * @description
     * Populates the id and label property for each item in the list. If the label property is not already set,
     * then we use an ordered list of attributes to use when determining the label for each item.
     * @param {GenericEditorOption[]} items The array of items to set the id and label attributes on
     * @param {String} idAttribute The name of the id attribute
     * @param {Array} orderedLabelAttributes The ordered list of label attributes
     * @returns {GenericEditorOption[]} the modified list of items
     */
    populateAttributes(items: GenericEditorOption[], idAttribute: string, orderedLabelAttributes: string[]): GenericEditorOption[];
    /**
     * @ngdoc method
     * @name dropdownPopulatorModule.DropdownPopulatorInterface#search
     * @methodOf dropdownPopulatorModule.DropdownPopulatorInterface
     *
     * @description
     * Searches a list and returns a promise resolving to only items with a label attribute that matches the search term.
     * @param {GenericEditorOption[]} items The list of items to search
     * @param {String} searchTerm The search term to filter items by
     * @returns {Promise<GenericEditorOption[]>} the filtered list of items
     */
    search(items: GenericEditorOption[], searchTerm: string): Promise<GenericEditorOption[]>;
}
