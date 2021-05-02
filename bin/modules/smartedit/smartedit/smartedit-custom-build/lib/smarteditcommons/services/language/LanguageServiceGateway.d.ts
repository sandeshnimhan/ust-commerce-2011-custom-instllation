import { GatewayFactory } from '../gateway/GatewayFactory';
import { MessageGateway } from '../gateway';
/** @internal */
export declare class LanguageServiceGateway {
    static instance: MessageGateway;
    constructor(gatewayFactory: GatewayFactory);
    getInstance(): MessageGateway;
}
