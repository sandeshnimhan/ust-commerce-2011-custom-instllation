import { PipeTransform } from '@angular/core';
/**
 * @ngdoc filter
 * @name smarteditCommonsModule.pipe:StartFromPipe
 *
 * @description
 * Used to slice the array of items starting from index passed as an argument.
 */
export declare class StartFromPipe implements PipeTransform {
    static transform<T>(input: T[], start: number): T[];
    transform<T>(input: T[], start: number): T[];
}
