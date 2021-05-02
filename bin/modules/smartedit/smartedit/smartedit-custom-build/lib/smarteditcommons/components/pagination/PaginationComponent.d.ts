import { EventEmitter } from '@angular/core';
/**
 * @ngdoc component
 * @name smarteditCommonsModule.component:PaginationComponent
 * @element se-pagination
 *
 * @description
 * The SmartEdit component that provides pagination by providing a visual pagination bar and buttons/numbers to navigate between pages.
 *
 *
 * @param {number} totalItems The total number of items.
 * @param {boolean=} displayTotalItems Whether to display the total number of items.
 * @param {number} itemsPerPage The total number of items per page.
 * @param {number} currentPage The current page number.
 * @param {function=} onChange The function that is called with the current page number when either a button or page number is clicked. The invoker
 * can bind this to a custom function to act and fetch results based on new page number.
 */
export declare class PaginationComponent {
    totalItems: number;
    displayTotalItems: boolean;
    itemsPerPage: number;
    currentPage: number;
    onChange: EventEmitter<number>;
    onPageChanged(page: number): void;
}
