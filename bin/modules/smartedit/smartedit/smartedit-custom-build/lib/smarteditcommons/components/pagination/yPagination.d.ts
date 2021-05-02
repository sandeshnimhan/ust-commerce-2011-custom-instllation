/**
 * @ngdoc directive
 * @name smarteditCommonsModule.component:yPagination
 * @scope
 * @deprecated since 2005
 * @restrict E
 * @element y-pagination
 *
 * @description
 * Deprecated, use {@link smarteditCommonsModule.component:PaginationComponent PaginationComponent}
 * The SmartEdit component that provides pagination by providing a visual pagination bar and buttons/numbers to navigate between pages.
 *
 * You need to bind the current page value to the ng-model property of the component.
 *
 * @param {<Number} totalItems The total number of items.
 * @param {<Number} itemsPerPage The total number of items per page.
 * @param {<String=} boundaryLinks Whether to display First / Last buttons. Defaults to false.
 * @param {<Number} ngModel The current page number.
 * @param {&Function} onChange The function that is called with the current page number when either a button or page number is clicked. The invoker
 * can bind this to a custom function to act and fetch results based on new page number.
 */
export declare class YPaginationComponent {
    totalItems: number;
    itemsPerPage: number;
    onChange: (data: {
        $currentPage: number;
    }) => void;
    currentPage: number;
    boundaryLinks: string;
    private exposedModel;
    $onInit(): void;
    onPageChange(): void;
    pageChanged(): void;
}
