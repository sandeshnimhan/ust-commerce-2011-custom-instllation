/**
 * @ngdoc service
 * @name functionsModule.service:DateUtils
 *
 * @description
 * provides a list of useful methods used for date manipulation
 */
export declare class DateUtils {
    /**
     * @ngdoc method
     * @name functionsModule.service:DateUtils#formatDateAsUtc
     * @methodOf functionsModule.service:DateUtils
     *
     * @description
     * Formats provided dateTime as utc.
     *
     * @param {Object|String} dateTime DateTime to format in utc.
     *
     * @return {String} formatted string.
     */
    formatDateAsUtc(dateTime: any): string;
}
export declare const dateUtils: DateUtils;
