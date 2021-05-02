import { LogService } from '@smart/utils';
export interface InterceptorHelperConfig {
    url: string;
    config?: InterceptorHelperConfig;
}
export declare class InterceptorHelper {
    private logService;
    constructor(logService: LogService);
    /**
     * Handles body of an interceptor request
     */
    handleRequest(config: InterceptorHelperConfig, callback: () => Promise<any>): InterceptorHelperConfig | Promise<any>;
    /**
     * Handles body of an interceptor response success
     */
    handleResponse(response: InterceptorHelperConfig, callback: () => Promise<any>): InterceptorHelperConfig | Promise<any>;
    /**
     * Handles body of an interceptor response error
     */
    handleResponseError(response: InterceptorHelperConfig, callback: () => Promise<any>): InterceptorHelperConfig | Promise<any>;
    private _isEligibleForInterceptors;
    private _handle;
}
