import { IEventService, LogService, PromiseUtils } from '@smart/utils';
export declare type EventHandler = (eventId: string, eventData?: any) => Promise<any> | any;
/**
 * @ngdoc service
 * @name smarteditCommonsModule.service:SystemEventService
 * @description
 *
 * The SystemEventService is used to transmit events synchronously or asynchronously. It is supported by the SmartEdit {@link smarteditCommonsModule.service:GatewayFactory gatewayFactory} to propagate events between SmartEditContainer and SmartEdit.
 * It also contains options to publish events, as well as subscribe the event handlers.
 *
 */
export declare class SystemEventService implements IEventService {
    private logService;
    private promiseUtils;
    private _eventHandlers;
    constructor(logService: LogService, promiseUtils: PromiseUtils);
    /**
     * @ngdoc method
     * @name smarteditCommonsModule.service:SystemEventService#publish
     * @methodOf smarteditCommonsModule.service:SystemEventService
     *
     * @description
     * send the event with data synchronously.
     *
     * @param {String} eventId The identifier of the event.
     * @param {any=} data The event payload. It is optional parameter.
     *
     * @return {Promise<any>} A promise with resolved data of last subscriber or with the rejected error reason
     */
    publish(eventId: string, data?: any): Promise<any>;
    /**
     * @ngdoc method
     * @name smarteditCommonsModule.service:SystemEventService#publishAsync
     * @methodOf smarteditCommonsModule.service:SystemEventService
     *
     * @description
     * send the event with data asynchronously.
     *
     * @param {String} eventId The identifier of the event.
     * @param {any=} data The event payload. It is an optional parameter.
     *
     * @return {Promise<any>} A deferred promise
     */
    publishAsync(eventId: string, data?: any): Promise<any>;
    /**
     * @ngdoc method
     * @name smarteditCommonsModule.service:SystemEventService#subscribe
     * @methodOf smarteditCommonsModule.service:SystemEventService
     *
     * @description
     * method to subscribe the event handler given the eventId and handler
     *
     * @param {String} eventId The identifier of the event.
     * @param {EventHandler} handler The event handler, a callback function which can either return a promise or directly a value.
     *
     * @return {() => void} unsubscribeFn Function to unsubscribe the event handler
     */
    subscribe(eventId: string, handler: EventHandler): () => void;
}
