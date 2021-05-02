import { PipeTransform } from '@angular/core';
/**
 * @ngdoc filter
 * @name smarteditCommonsModule.filter:FilterByFieldPipe
 * @description
 * A pipe for an array of objects, that will search all the first level fields of an object,
 * or optionally allows you to specify which fields to include in the search. Only fields that correspond to string
 * values will be considered in the filtering. The filter implements the AND strategy, thus the filter will return search results
 * regardless of the search string order. IE search string "Add Mobile" will return strings such "Mobile Address" and "Address Mobile"
 *
 * @param {Object[]} items An array of objects
 * @param {string} query The search string in which the values will be filtered by. If no search string is given
 * the original array of objects is be returned.
 * @param {string[]=} keys An array of object fields which determines which key values that the filter will parse through.
 * If no array is specified the filter will check each field value in the array of objects.
 * @param {Function=} callbackFn A function that will be executed after each iteration of the filter.
 *
 */
export declare class FilterByFieldPipe implements PipeTransform {
    static transform<T>(items: T[], query: string, keys?: string[], callbackFn?: (filtered: T[]) => void): T[];
    transform<T>(items: T[], query: string, keys?: string[], callbackFn?: (filtered: T[]) => void): T[];
}
