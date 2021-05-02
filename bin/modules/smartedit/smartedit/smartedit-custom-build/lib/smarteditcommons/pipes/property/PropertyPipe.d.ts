import { PipeTransform } from '@angular/core';
import { TypedMap } from '@smart/utils';
/**
 * @ngdoc directive
 * @name smarteditCommonsModule.pipe:PropertyPipe
 * @element seProperty
 *
 * @description
 * Angular pipe used to filter array of objects by object passed as an argument. The pipe will return array of objects that contains the exact keys and values of passed object.
 *
 * @example
 *
 * <div *ngFor='let item of items | seProperty:{ isEnabled: true }'></div>
 */
export declare class PropertyPipe<T extends TypedMap<any>> implements PipeTransform {
    transform(array: T[], propObject: TypedMap<string>): T[];
}
