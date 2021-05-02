import { ComponentAttributes, SeFactory } from '../di';
/**
 * @ngdoc service
 * @name functionsModule.service:NodeUtils
 *
 * @description
 * A collection of utility methods for Nodes.
 */
export declare class NodeUtils {
    /**
     * @ngdoc method
     * @name functionsModule.service:NodeUtils#collectSmarteditAttributes
     * @methodOf functionsModule.service:NodeUtils
     *
     * @description
     * Retrieves all the attributes of an overlay Node (identified by its data-smartedit-element-uuid attribute) containing with data-smartedit- or smartedit-
     * and package them as a map of key values.
     * Keys are stripped of data- and are turned to camelcase
     * @returns {JSON} map of key values.
     */
    collectSmarteditAttributesByElementUuid(elementUuid: string): ComponentAttributes;
    hasLegacyAngularJSBootsrap(): boolean;
    /**
     * @ngdoc method
     * @name functionsModule.service:NodeUtils#compareHTMLElementsPosition
     * @methodOf functionsModule.service:NodeUtils
     *
     * @description
     * A function to sort an array containing DOM elements according to their position in the DOM
     *
     * @param {key =} key Optional key value to get the
     *
     * @return {Function} the compare function to use with array.sort(compareFunction) to order DOM elements as they would appear in the DOM
     */
    compareHTMLElementsPosition(key?: string): (a: any, b: any) => number;
    /**
     * @ngdoc method
     * @name functionsModule.service:NodeUtils#isPointOverElement
     * @methodOf functionsModule.service:NodeUtils
     *
     * @description
     * <b>isPointOverElement</b> will check if the given point is over the htmlElement
     *
     * @param {Object} point point coordinates
     * @param {Number} point.x mouse x position
     * @param {Number} point.y mouse y position
     * @param {HTMLElement} htmlElement htmlElement to test
     *
     * @returns {boolean} true if the given point is over the htmlElement
     */
    isPointOverElement(point: {
        x: number;
        y: number;
    }, htmlElement: HTMLElement): boolean;
    /**
     * @ngdoc method
     * @name functionsModule.service:NodeUtils#areIntersecting
     * @methodOf functionsModule.service:NodeUtils
     *
     * @description
     * determines whether 2 BoundingClientRect are intersecting even partially
     *
     * @param {Object} boundingClientRect1 size of an element and its position relative to the viewport as per {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect API}
     * @param {Object} boundingClientRect2 size of an element and its position relative to the viewport as per {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect API}
     * @returns {boolean} true if there is a partial or total intersection
     */
    areIntersecting(boundingClientRect1: ClientRect, boundingClientRect2: ClientRect): boolean;
    injectJS(): {
        getInjector: () => any;
        execute: (conf: {
            srcs: string[];
            callback: SeFactory;
            index?: number;
        }) => void;
    };
}
export declare const nodeUtils: NodeUtils;
