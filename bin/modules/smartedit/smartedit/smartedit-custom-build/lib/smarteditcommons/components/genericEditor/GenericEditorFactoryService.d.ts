/// <reference types="angular" />
/// <reference types="jquery" />
import { UpgradeModule } from '@angular/upgrade/static';
import { LogService, RestServiceFactory } from '@smart/utils';
import { ISharedDataService } from '../../services';
import { IGenericEditorConstructor } from './types';
import { EditorFieldMappingService } from './services/EditorFieldMappingService';
import { SeValidationMessageParser } from './services/SeValidationMessageParser';
import { LanguageService } from '../../services/language/LanguageService';
import { SystemEventService } from '../../services/SystemEventService';
/**
 * @ngdoc service
 * @name GenericEditorModule.service:GenericEditorFactoryService
 * @description
 * The Generic Editor is a class that makes it possible for SmartEdit users (CMS managers, editors, etc.) to edit components in the SmartEdit interface.
 * The Generic Editor class is used by the {@link GenericEditorModule.component:GenericEditorComponent GenericEditorComponent} component.
 * The genericEditor directive makes a call either to a Structure API or, if the Structure API is not available, it reads the data from a local structure to request the information that it needs to build an HTML form.
 * It then requests the component by its type and ID from the Content API. The genericEditor directive populates the form with the data that is has received.
 * The form can now be used to edit the component. The modified data is saved using the Content API if it is provided else it would return the form data itself.
 * <br/><br/>
 * <strong>The structure and the REST structure API</strong>.
 * <br/>
 * The constructor of the {@link GenericEditorModule.service:GenericEditorFactoryService GenericEditorFactoryService} must be provided with the pattern of a REST Structure API, which must contain the string  ":smarteditComponentType", or with a local data structure.
 * If the pattern, Structure API, or the local structure is not provided, the Generic Editor will fail. If the Structure API is used, it must return a JSON payload that holds an array within the attributes property.
 * If the actual structure is used, it must return an array. Each entry in the array provides details about a component property to be displayed and edited. The following details are provided for each property:
 *
 * <ul>
 * <li><strong>qualifier:</strong> Name of the property.
 * <li><strong>i18nKey:</strong> Key of the property label to be translated into the requested language.
 * <li><strong>editable:</strong> Boolean that indicates if a property is editable or not. The default value is true.
 * <li><strong>localized:</strong> Boolean that indicates if a property is localized or not. The default value is false.
 * <li><strong>required:</strong> Boolean that indicates if a property is mandatory or not. The default value is false.
 * <li><strong>cmsStructureType:</strong> Value that is used to determine which form widget (property editor) to display for a specified property.
 * The selection is based on an extensible strategy mechanism owned by {@link GenericEditorModule.service:EditorFieldMappingService EditorFieldMappingService}.
 * <li><strong>cmsStructureEnumType:</strong> The qualified name of the Enum class when cmsStructureType is "Enum"
 * </li>
 * <ul><br/>
 *
 * <b>Note:</b><br/>
 * The generic editor has a tabset within. This allows it to display complex types in an organized and clear way. By default, all fields are stored
 * in the default tab, and if there is only one tab the header is hidden. The selection and configuration of where each field resides is
 * controlled by the  {@link GenericEditorModule.service:EditorFieldMappingService EditorFieldMappingService}. Similarly, the rendering
 * of tabs can be customized with the {@link GenericEditorModule.service:GenericEditorTabService GenericEditorTabService}.
 * <br />
 * <br />
 *
 * There are two options when you use the Structure API. The first option is to use an API resource that returns the structure object.
 * The following is an example of the JSON payload that is returned by the Structure API in this case:
 * <pre>
 * {
 *     attributes: [{
 *         cmsStructureType: "ShortString",
 *         qualifier: "someQualifier1",
 *         i18nKey: 'i18nkeyForsomeQualifier1',
 *         localized: false
 *     }, {
 *         cmsStructureType: "LongString",
 *         qualifier: "someQualifier2",
 *         i18nKey: 'i18nkeyForsomeQualifier2',
 *         localized: false
 *    }, {
 *         cmsStructureType: "RichText",
 *         qualifier: "someQualifier3",
 *         i18nKey: 'i18nkeyForsomeQualifier3',
 *         localized: true,
 *         required: true
 *     }, {
 *         cmsStructureType: "Boolean",
 *         qualifier: "someQualifier4",
 *         i18nKey: 'i18nkeyForsomeQualifier4',
 *         localized: false
 *     }, {
 *         cmsStructureType: "DateTime",
 *         qualifier: "someQualifier5",
 *         i18nKey: 'i18nkeyForsomeQualifier5',
 *         localized: false
 *     }, {
 *         cmsStructureType: "Media",
 *         qualifier: "someQualifier6",
 *         i18nKey: 'i18nkeyForsomeQualifier6',
 *         localized: true,
 *         required: true
 *     }, {
 *         cmsStructureType: "Enum",
 *         cmsStructureEnumType:'de.mypackage.Orientation'
 *         qualifier: "someQualifier7",
 *         i18nKey: 'i18nkeyForsomeQualifier7',
 *         localized: true,
 *         required: true
 *     }]
 * }
 * </pre><br/>
 * The second option is to use an API resource that returns a list of structures. In this case, the generic editor will select the first element from the list and use it to display its attributes.
 * The generic editor expects the structures to be in one of the two fields below.
 * <pre>
 * {
 *     structures: [{}, {}]
 * }
 *
 * or
 *
 * {
 *     componentTypes: [{}, {}]
 * }
 * </pre>
 * If the list has more than one element, the Generic Editor will throw an exception, otherwise it will get the first element on the list.
 * The following is an example of the JSON payload that is returned by the Structure API in this case:
 * <pre>
 * {
 *     structures: [
 *         {
 *             attributes: [{
 *                 		cmsStructureType: "ShortString",
 *                 		qualifier: "someQualifier1",
 *                 		i18nKey: 'i18nkeyForsomeQualifier1',
 *                 		localized: false
 *             		}, {
 *                 		cmsStructureType: "LongString",
 *                 		qualifier: "someQualifier2",
 *                 		i18nKey: 'i18nkeyForsomeQualifier2',
 *                 		localized: false
 *         	   		}]
 *         }
 *     ]
 * }
 * </pre>
 * <pre>
 * {
 *     componentTypes: [
 *         {
 *             attributes: [{
 *                 		cmsStructureType: "ShortString",
 *                 		qualifier: "someQualifier1",
 *                 		i18nKey: 'i18nkeyForsomeQualifier1',
 *                 		localized: false
 *             		}, {
 *                 		cmsStructureType: "LongString",
 *                 		qualifier: "someQualifier2",
 *                 		i18nKey: 'i18nkeyForsomeQualifier2',
 *                 		localized: false
 *         	   		}]
 *         }
 *     ]
 * }
 * </pre>
 * The following is an example of the expected format of a structure:
 * <pre>
 *    [{
 *         cmsStructureType: "ShortString",
 *         qualifier: "someQualifier1",
 *         i18nKey: 'i18nkeyForsomeQualifier1',
 *         localized: false
 *     }, {
 *         cmsStructureType: "LongString",
 *         qualifier: "someQualifier2",
 *         i18nKey: 'i18nkeyForsomeQualifier2',
 *         editable: false,
 *         localized: false
 *    }, {
 *         cmsStructureType: "RichText",
 *         qualifier: "someQualifier3",
 *         i18nKey: 'i18nkeyForsomeQualifier3',
 *         localized: true,
 *         required: true
 *     }, {
 *         cmsStructureType: "Boolean",
 *         qualifier: "someQualifier4",
 *         i18nKey: 'i18nkeyForsomeQualifier4',
 *         localized: false
 *     }, {
 *         cmsStructureType: "DateTime",
 *         qualifier: "someQualifier5",
 *         i18nKey: 'i18nkeyForsomeQualifier5',
 *         editable: false,
 *         localized: false
 *     }, {
 *         cmsStructureType: "Media",
 *         qualifier: "someQualifier6",
 *         i18nKey: 'i18nkeyForsomeQualifier6',
 *         localized: true,
 *         required: true
 *     }, {
 *         cmsStructureType: "Enum",
 *         cmsStructureEnumType:'de.mypackage.Orientation'
 *         qualifier: "someQualifier7",
 *         i18nKey: 'i18nkeyForsomeQualifier7',
 *         localized: true,
 *         required: true
 *     }]
 * </pre>
 *
 * <strong>The REST CRUD API</strong>, is given to the constructor of {@link GenericEditorModule.service:GenericEditorFactoryService GenericEditorFactoryService}.
 * The CRUD API must support GET and PUT of JSON payloads.
 * The PUT method must return the updated payload in its response. Specific to the GET and PUT, the payload must fulfill the following requirements:
 * <ul>
 * 	<li>DateTime types: Must be serialized as long timestamps.</li>
 * 	<li>Media types: Must be serialized as identifier strings.</li>
 * 	<li>If a cmsStructureType is localized, then we expect that the CRUD API returns a map containing the type (string or map) and the map of values, where the key is the language and the value is the content that the type returns.</li>
 * </ul>
 *
 * The following is an example of a localized payload:
 * <pre>
 * {
 *    content: {
 * 		'en': 'content in english',
 * 		'fr': 'content in french',
 * 		'hi': 'content in hindi'
 * 	  }
 * }
 * </pre>
 *
 * <br/><br/>
 *
 * If a validation warning or error occurs, the PUT method of the REST CRUD API will return a validation warning/error object that contains an array of validation messages. The information returned for each validation message is as follows:
 * <ul>
 * 	<li><strong>subject:</strong> The qualifier that has the error</li>
 * 	<li><strong>message:</strong> The error message to be displayed</li>
 * 	<li><strong>type:</strong> The type of message returned. This is of the type ValidationError or Warning.</li>
 * 	<li><strong>language:</strong> The language the error needs to be associated with. If no language property is provided, a match with regular expression /(Language: \[)[a-z]{2}\]/g is attempted from the message property. As a fallback, it implies that the field is not localized.</li>
 * </ul>
 *
 * The following code is an example of an error response object:
 * <pre>
 * {
 *    errors: [{
 *        subject: 'qualifier1',
 *        message: 'error message for qualifier',
 *        type: 'ValidationError'
 *    }, {
 *        subject: 'qualifier2',
 *        message: 'error message for qualifier2 language: [fr]',
 *        type: 'ValidationError'
 *    }, {
 *        subject: 'qualifier3',
 *        message: 'error message for qualifier2',
 *        type: 'ValidationError'
 *    }, {
 *        subject: 'qualifier4',
 *        message: 'warning message for qualifier4',
 *        type: 'Warning'
 *    }]
 * }
 *
 * </pre>
 *
 * Whenever any sort of dropdown is used in one of the cmsStructureType widgets, it is advised using {@link GenericEditorModule.service:GenericEditorFactoryService#methods_refreshOptions refreshOptions method}. See this method documentation to learn more.
 *
 */
export declare class GenericEditorFactoryService {
    genericEditorConstructor: IGenericEditorConstructor;
    constructor(yjQuery: JQueryStatic, restServiceFactory: RestServiceFactory, languageService: LanguageService, sharedDataService: ISharedDataService, systemEventService: SystemEventService, logService: LogService, upgrade: UpgradeModule, seValidationMessageParser: SeValidationMessageParser, editorFieldMappingService: EditorFieldMappingService);
    getGenericEditorConstructor(): IGenericEditorConstructor;
}
