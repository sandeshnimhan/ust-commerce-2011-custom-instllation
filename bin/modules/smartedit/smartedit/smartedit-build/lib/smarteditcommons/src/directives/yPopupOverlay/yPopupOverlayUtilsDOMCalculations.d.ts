import * as angular from 'angular';
export interface YPopupOveryayPosition {
    width: number;
    height: number;
    top: number;
    left: number;
}
/**
 * @ngdoc service
 * @name yPopupOverlayModule.service:yPopupOverlayUtilsDOMCalculations
 *
 * @description
 * Contains some {@link yPopupOverlayModule.directive:yPopupOverlay yPopupOverlay} helper functions for
 * calculating positions and sizes on the DOM
 */
export declare class YPopupOverlayUtilsDOMCalculations {
    private $window;
    private $document;
    constructor($window: angular.IWindowService, $document: angular.IDocumentService);
    /**
     * @ngdoc method
     * @name yPopupOverlayModule.service:yPopupOverlayUtilsDOMCalculations#adjustHorizontalToBeInViewport
     * @methodOf yPopupOverlayModule.service:yPopupOverlayUtilsDOMCalculations
     *
     * @description
     * Modifies the input rectangle to be absolutely positioned horizontally in the viewport.<br />
     * Does not modify vertical positioning.
     *
     * @param {Object} absPosition A rectangle object representing the size and absolutely positioned location of the overlay
     * @param {number} absPosition.left The left side of the overlay element
     * @param {number} absPosition.width The width of the overlay element
     */
    adjustHorizontalToBeInViewport(absPosition: YPopupOveryayPosition): void;
    /**
     * @ngdoc method
     * @name yPopupOverlayModule.service:yPopupOverlayUtilsDOMCalculations#calculatePreferredPosition
     * @methodOf yPopupOverlayModule.service:yPopupOverlayUtilsDOMCalculations
     *
     * @description
     * Calculates the preferred position of the overlay, based on the size and position of the anchor
     * and the size of the overlay element
     *
     * @param {Object} anchorBoundingClientRect A bounding rectangle representing the overlay's anchor
     * @param {number} anchorBoundingClientRect.top The top of the anchor, absolutely positioned
     * @param {number} anchorBoundingClientRect.right The right of the anchor, absolutely positioned
     * @param {number} anchorBoundingClientRect.bottom The bottom of the anchor, absolutely positioned
     * @param {number} anchorBoundingClientRect.left The left of the anchor, absolutely positioned
     * @param {number} targetWidth The width of the overlay element
     * @param {number} targetHeight The height of the overlay element
     * @param {string =} [targetValign='bottom'] The preferred vertical alignment, either 'top' or 'bottom'
     * @param {string =} [targetHalign='right'] The preferred horizontal alignment, either 'left' or 'right'
     *
     * @returns {Object} A new size and position for the overlay
     */
    calculatePreferredPosition(anchorBoundingClientRect: ClientRect, targetWidth: number, targetHeight: number, targetValign: 'top' | 'bottom', targetHalign: 'left' | 'right'): YPopupOveryayPosition;
    private getScrollBarWidth;
}
