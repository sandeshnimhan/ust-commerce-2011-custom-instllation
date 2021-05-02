import { StringUtils as ParentStringUtils } from '@smart/utils';
/**
 * @ngdoc service
 * @name functionsModule.service:StringUtils
 *
 * @description
 * A collection of utility methods for windows.
 */
export declare class StringUtils extends ParentStringUtils {
    /**
     * @ngdoc method
     * @name functionsModule.service:StringUtils#sanitizeHTML
     * @methodOf functionsModule.service:StringUtils
     *
     * @description
     * <b>sanitizeHTML</b> will remove breaks and space .
     *
     * @param {String} a string that needs to be escaped.
     *
     * @returns {String} the sanitized HTML.
     *
     */
    sanitizeHTML(text: string): string;
    /**
     * @ngdoc method
     * @name functionsModule.service:StringUtils#generateIdentifier
     * @methodOf functionsModule.service:StringUtils
     *
     * @description
     * <b>generateIdentifier</b> will generate a unique string based on system time and a random generator.
     *
     * @returns {String} a unique identifier.
     *
     */
    generateIdentifier(): string;
    /**
     * @ngdoc method
     * @name functionsModule.service:StringUtils#getEncodedString
     * @methodOf functionsModule.service:StringUtils
     *
     * @description
     * <b>getEncodedString</b> will creates a base-64 encoded ASCII string
     * from the object or string  passed as input
     *
     * @returns {string} a base-64 encoded ASCII string.
     *
     */
    getEncodedString(input: any): string;
    /**
     * @ngdoc method
     * @name functionsModule.service:StringUtils#trim
     * @methodOf functionsModule.service:StringUtils
     *
     * @description
     * @deprecated since 2005 use {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim API}
     * <b>trim</b> will remove spaces at the beginning and end of a given string.
     *
     * @param {String} inputString any input string.
     *
     * @returns {String} the newly modified string without spaces at the beginning and the end
     */
    trim(aString: string): string;
    /**
     * @ngdoc method
     * @name functionsModule.service:StringUtils#escapeHtml
     * @methodOf functionsModule.service:StringUtils
     *
     * @description
     * <b>escapeHtml</b> will escape &, <, >, " and ' characters .
     *
     * @param {String | Number} a string that needs to be escaped.
     *
     * @returns {String} the escaped string.
     *
     */
    escapeHtml(str: string | number): string | number;
    resourceLocationToRegex(str: string): RegExp;
}
export declare const stringUtils: StringUtils;
