import { AfterViewInit, ChangeDetectorRef, EventEmitter, OnChanges, OnInit } from '@angular/core';
import { Page } from '@smart/utils';
import { DiscardablePromiseUtils } from '../../utils';
/**
 * @ngdoc component
 * @name smarteditCommonsModule.component:InfiniteScrollingComponent
 * @element se-dynamic-paged-list
 *
 * @description
 * A component that you can use to implement infinite scrolling for an expanding content
 * (typically with a ng-repeat for AngularJS / *ngFor for Angular) nested in it.
 * It is meant to handle paginated requests from a backend when data is expected to be large.
 *
 * Since the expanding content is a projected element, we may specify the context
 * to which the items will be attached:
 * If context is myContext, each pagination will push its new items to myContext.items.
 *
 * @param {Number} pageSize The maximum size of each page requested from the backend.
 * @param {String} mask The string value used to filter the result.
 * @param {String?} dropDownContainerClass An optional CSS class to be added to the container of the dropdown.
 * @param {String?} dropDownClass  An optional CSS class to be added to the dropdown.
 * @param {String?} distance  A optional number representing how close the bottom of the element must be to the bottom of the container before the expression specified by fetchPage function is triggered. Defaults to 0.
 * @param {Array} context The container object to which the items of the fetched `Page` will be added.
 * @param {Object?} fetchPage Function to fetch the next page when the bottom of the element approaches the bottom of the container.
 *
 *
 */
export declare class InfiniteScrollingComponent<T extends TechnicalUniqueIdAware> implements OnInit, OnChanges, AfterViewInit {
    private discardablePromiseUtils;
    private cdr;
    /** The maximum size of each page requested from the backend. */
    pageSize: number;
    /**
     * A string value sent to the server upon fetching a page to further restrict the search,
     * it is sent as query string `mask`.
     *
     * The directive listens for change to mask and will reset the scroll and re-fetch data.
     *
     * It is left to the implementers to decide what it filters on.
     */
    mask: string;
    /**
     * An optional CSS class to be added to the container of the dropdown.
     * It would typically be used to override the default height.
     *
     * Note: The resolved CSS must set a `height` (or `max-height`) and `overflow-y:scroll`.
     */
    dropDownContainerClass: string;
    /**
     * An optional CSS class to be added to the dropdown
     *
     * Note: Neither height nor overflow should be set on the dropdown,
     * it must be free to fill up the space and reach the container size.
     * Failure to do so will cause the directive to call `nextPage` as many times
     * as the number of available pages on the server.
     */
    dropDownClass: string;
    /**
     * A number representing how close the bottom of the element must be to the bottom of the container
     * before the expression specified by fetchPage function is triggered.
     * Measured in multiples of the container height;
     *
     * For example, if the container is 1000 pixels tall and distance is set to 2,
     * the infinite scroll expression will be evaluated when the bottom of the element is within 2000 pixels of the bottom of the container.
     * Defaults to 0 (e.g. the expression will be evaluated when the bottom of the element crosses the bottom of the container).
     */
    distance: number;
    /**
     * The container object to which the items of the fetched `Page` will be added.
     * The value for "items" property of that object will be set.
     */
    context: {
        items: T[];
    };
    /**
     * Function to fetch the next page when the bottom of the element approaches the bottom of the container.
     * The `currentPage` is determined by the scrolling and starts with 0.
     */
    fetchPage: (mask: string, pageSize: number, currentPage: number) => Promise<Page<T>>;
    /**
     * Some components may want to do some action when the `items` value changes.
     */
    itemsChange: EventEmitter<T[]>;
    constructor(discardablePromiseUtils: DiscardablePromiseUtils, cdr: ChangeDetectorRef);
    /**
     * Fetches next page when the scroll approaches the bottom of scroll container element.
     *
     * Note: For the initial load, when the content inside the directive's element is not tall enough to
     * fill up the entire container, causing the scroll not to appear, it will fetch the next page.
     * This action will only be performed once, so if there's a need to load more pages, you will have to call this function manually.
     */
    nextPage(): void;
    scrollToTop(): void;
    scrollToBottom(): void;
}
