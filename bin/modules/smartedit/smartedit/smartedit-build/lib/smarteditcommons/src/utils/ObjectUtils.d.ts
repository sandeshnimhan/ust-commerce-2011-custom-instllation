import { TypedMap } from '../dtos';
/**
 * @ngdoc service
 * @name functionsModule.service:ObjectUtils
 *
 * @description
 * provides a list of useful methods used for object manipulation
 */
declare class ObjectUtils {
    /**
     * @ngdoc method
     * @name functionsModule.service:ObjectUtils#copy
     * @methodOf functionsModule.service:ObjectUtils
     * @description
     * <b>copy</b> will do a deep copy of the given input object.
     * If an object being stringified has a property named toJSON whose value is a function, then the toJSON() method customizes JSON stringification behavior: instead of the object being serialized, the value returned by the toJSON() method when called will be serialized.
     *
     * @param {Object} candidate the javaScript value that needs to be deep copied.
     *
     * @returns {Object} A deep copy of the input
     */
    copy<T>(candidate: T): T;
    /**
     * @ngdoc method
     * @name functionsModule.service:ObjectUtils#isObjectEmptyDeep
     * @methodOf functionsModule.service:ObjectUtils
     *
     * @description
     * Will check if the object is empty and will return true if each and every property of the object is empty
     *
     * @param {Object} value, the value to evaluate
     * @returns {Boolean} a boolean.
     */
    isObjectEmptyDeep: (value: any) => boolean;
    /**
     * @ngdoc method
     * @name functionsModule.service:ObjectUtils#resetObject
     * @methodOf functionsModule.service:ObjectUtils
     *
     * @description
     * Resets a given object's properties' values
     *
     * @param {Object} targetObject, the object to reset
     * @param {Object} modelObject, an object that contains the structure that targetObject should have after a reset
     * @returns {Object} Returns the object that has been reset
     */
    resetObject: (targetObject: any, modelObject: any) => any;
    /**
     * @ngdoc method
     * @name functionsModule.service:ObjectUtils#merge
     * @methodOf functionsModule.service:ObjectUtils
     *
     * @description
     * <b>merge</b> will merge the contents of two objects together into the first object.
     *
     * **Note:** This method mutates `object`.
     *
     * @param {Object} target any JavaScript object.
     * @param {Object} source any JavaScript object.
     *
     * @returns {Object} a new object as a result of merge
     */
    merge<TTarget, TSource>(target: TTarget, source: TSource): TTarget & TSource;
    /**
     * @ngdoc method
     * @name functionsModule.service:ObjectUtils#deepIterateOverObjectWith
     * @methodOf functionsModule.service:ObjectUtils
     *
     * @description
     * Iterates over object and allows to modify a value using callback function.
     * @param {Object} obj an object to iterate.
     * @param {Function} callback callback to apply to each object value.
     * @returns {Object} the object with modified values.
     */
    deepIterateOverObjectWith: (obj: any, callback: any) => any;
    /**
     * @ngdoc method
     * @name functionsModule.service:ObjectUtils#deepObjectPropertyDiff
     * @methodOf functionsModule.service:ObjectUtils
     *
     * @description
     * Returns an object that contains list of fields and for each field it has a boolean value
     * which is true when the property was modified, added or removed, false otherwise.
     * @param {Object} object The first object to inspect.
     * @param {Object} source The second object to inspect.
     * @returns {Object} the diff object.
     */
    deepObjectPropertyDiff: (firstObject: any, secondObject: any) => any;
    /**
     * @ngdoc method
     * @name functionsModule.service:ObjectUtils#convertToArray
     * @methodOf functionsModule.service:ObjectUtils
     *
     * @description
     * <b>convertToArray</b> will convert the given object to array.
     * The output array elements are an object that has a key and value,
     * where key is the original key and value is the original object.
     *
     * @param {Object} inputObject any input object.
     *
     * @returns {Array} the array created from the input object
     */
    convertToArray(object: any): {
        key: string;
        value: any;
    }[];
    /**
     * @ngdoc method
     * @name functionsModule.service:ObjectUtils#uniqueArray
     * @methodOf functionsModule.service:ObjectUtils
     *
     * @description
     * <b>uniqueArray</b> returns the first Array argument supplemented with new entries from the second Array argument.
     *
     * **Note:** This method mutates `array1`.
     *
     * @param {Array} array1 any JavaScript array.
     * @param {Array} array2 any JavaScript array.
     */
    uniqueArray(array1: any[], array2: any[]): any[];
    /**
     * @ngdoc method
     * @name functionsModule.service:ObjectUtils#isFunction
     * @methodOf functionsModule.service:ObjectUtils
     *
     * @description Checks if `value` is a function.
     *
     * @static
     * @category Objects
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if the `value` is a function, else `false`.
     */
    isFunction(value: any): boolean;
    /**
     * @ngdoc method
     * @name functionsModule.service:ObjectUtils#isObject
     * @methodOf functionsModule.service:ObjectUtils
     *
     * @description
     * checks if the value is the ECMAScript language type of Object
     */
    isObject(value: any): boolean;
    isTypedMap<T = string>(value: any): value is TypedMap<T>;
    /**
     * @ngdoc method
     * @name functionsModule.service:ObjectUtils#readObjectStructure
     * @methodOf functionsModule.service:ObjectUtils
     *
     */
    readObjectStructure: (json: any, recursiveCount?: number) => any;
    /**
     * @ngdoc method
     * @name functionsModule.service:ObjectUtils#orderBy
     * @methodOf functionsModule.service:ObjectUtils
     *
     * @description
     * Sorts an array of strings or objects in specified order.
     * String of numbers are treated the same way as numbers.
     * For an array of objects, `prop` argument is required.
     *
     * @param {T[]} array Array to sort
     * @param {string} [prop] Property on which comparision is based. Required for an array of objects.
     * @param {boolean} [reverse=false] specify ascending or descending order
     *
     * @returns {T[]} the new sorted array
     */
    sortBy<T>(array: T[], prop?: string, reverse?: boolean): T[];
}
declare const objectUtils: ObjectUtils;
export { objectUtils, ObjectUtils };
