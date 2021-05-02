import { CloneableUtils, FunctionsUtils, LogService, PromiseUtils } from '@smart/utils';
import { MessageGateway } from './MessageGateway';
import { WindowUtils } from 'smarteditcommons/utils';
import { SystemEventService } from '../SystemEventService';
/**
 * @ngdoc service
 * @name smarteditCommonsModule.service:GatewayFactory
 *
 * @description
 * The Gateway Factory controls the creation of and access to {@link smarteditCommonsModule.service:MessageGateway MessageGateway}
 * instances.
 *
 * To construct and access a gateway, you must use the GatewayFactory's createGateway method and provide the channel
 * ID as an argument. If you try to create the same gateway twice, the second call will return a null.
 */
export declare class GatewayFactory {
    private logService;
    private systemEventService;
    private cloneableUtils;
    private windowUtils;
    private promiseUtils;
    private functionsUtils;
    static TIMEOUT_TO_RETRY_PUBLISHING: number;
    private messageGatewayMap;
    constructor(logService: LogService, systemEventService: SystemEventService, cloneableUtils: CloneableUtils, windowUtils: WindowUtils, promiseUtils: PromiseUtils, functionsUtils: FunctionsUtils);
    /**
     * @ngdoc method
     * @name smarteditCommonsModule.service:GatewayFactory#initListener
     * @methodOf smarteditCommonsModule.service:GatewayFactory
     *
     * @description
     * Initializes a postMessage event handler that dispatches the handling of an event to the specified gateway.
     * If the corresponding gateway does not exist, an error is logged.
     */
    initListener(): void;
    /**
     * @ngdoc method
     * @name smarteditCommonsModule.service:GatewayFactory#createGateway
     * @methodOf smarteditCommonsModule.service:GatewayFactory
     *
     * @description
     * Creates a gateway for the specified gateway identifier and caches it in order to handle postMessage events
     * later in the application lifecycle. This method will fail on subsequent calls in order to prevent two
     * clients from using the same gateway.
     *
     * @param {String} gatewayId The identifier of the gateway.
     * @returns {MessageGateway} Returns the newly created Message Gateway or null.
     */
    createGateway(gatewayId: string): MessageGateway;
    /**
     * allowed if receiving end is frame or [container + (origin same as loaded iframe)]
     */
    private _isAllowed;
}
