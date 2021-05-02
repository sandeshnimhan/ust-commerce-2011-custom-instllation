import { PipeTransform } from '@angular/core';
/**
 * @ngdoc filter
 * @name smarteditCommonsModule.filter:ReversePipe
 *
 * @description
 * Returns an array containing the items from the specified collection in reverse order
 */
export declare class ReversePipe implements PipeTransform {
    transform<T>(value: T[]): T[] | undefined;
}
