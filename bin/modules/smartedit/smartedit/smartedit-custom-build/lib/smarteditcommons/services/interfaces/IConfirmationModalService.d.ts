import * as angular from 'angular';
import { ConfirmationModalConfig, LegacyConfirmationModalConfig } from './IConfirmationModal';
export declare abstract class IConfirmationModalService {
    confirm(conf: LegacyConfirmationModalConfig): angular.IPromise<any> | Promise<any>;
    confirm(conf: ConfirmationModalConfig): Promise<any>;
}
