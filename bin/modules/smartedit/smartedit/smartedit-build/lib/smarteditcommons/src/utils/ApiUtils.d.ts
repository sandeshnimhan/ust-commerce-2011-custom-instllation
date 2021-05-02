/**
 * @ngdoc service
 * @name functionsModule.service:ApiUtils
 *
 * @description Collection of utility methods for handling responses from backend calls
 *
 */
export declare class ApiUtils {
    /**
     * @ngdoc method
     * @name functionsModule.service:ApiUtils#getDataFromResponse
     * @methodOf functionsModule.service:ApiUtils
     *
     * @description
     * when provided with a response returned from a backend call, will filter the response
     * to retrieve the data of interest.
     *
     * @param {Object} response, response returned from a backend call.
     * @returns {Array} Returns the array from the response.
     */
    getDataFromResponse(response: any): any;
    /**
     * @ngdoc method
     * @name functionsModule.service:ApiUtils#getKeyHoldingDataFromResponse
     * @methodOf functionsModule.service:ApiUtils
     *
     * @description
     * when provided with a response returned from a backend call, will filter the response
     * to retrieve the key holding the data of interest.
     *
     * @param {Object} response, response returned from a backend call.
     * @returns {String} Returns the name of the key holding the array from the response.
     */
    getKeyHoldingDataFromResponse(response: any): string;
}
export declare const apiUtils: ApiUtils;
