import * as angular from 'angular';
import { IModalConfig } from './IModalConfig';
import { ModalRef as FundamentalModalRef, ModalService as FundamentalModalService } from '@fundamental-ngx/core';
import { IFundamentalModalConfig } from './';
import { ModalService as BaseModalService } from '@smart/utils';
import { UpgradeModule } from '@angular/upgrade/static';
/**
 * @ngdoc service
 * @name modalServiceModule.service:ModalService
 *
 * @description
 * Service responsible for opening the modals after providing configuration
 *
 */
export declare class ModalService extends BaseModalService {
    fundamentalModalService: FundamentalModalService;
    private upgrade;
    constructor(fundamentalModalService: FundamentalModalService, upgrade: UpgradeModule);
    hasOpenModals(): boolean;
    /**
     * @ngdoc method
     * @name modalServiceModule.service:ModalService#dismissAll
     * @methodOf modalServiceModule.service:ModalService
     *
     * @description
     * Dismisses all instances of modals both produced by angular bootstrap ui and Fundamental
     */
    dismissAll(): void;
    /**
     * @ngdoc method
     * @name modalServiceModule.service:ModalService#open
     * @methodOf modalServiceModule.service:ModalService
     *
     * @description
     * Opens a Fundamental Ngx modal
     *
     * @param {IFundamentalModalConfig} conf {@link modalServiceModule.interface:IFundamentalModalConfig IFundamentalModalConfig}
     *
     * @returns {ModalRef} {@link https://sap.github.io/fundamental-ngx/#/core/modal modal}
     */
    open<T>(conf: IFundamentalModalConfig<T>): FundamentalModalRef;
    /**
     * @ngdoc method
     * @name modalServiceModule.service:ModalService#open
     * @methodOf modalServiceModule.service:ModalService
     *
     * @description
     * Open provides a simple way to open modal windows with custom content, that share a common look and feel.
     *
     * The modal window can be closed multiple ways, through {@link modalServiceModule.object:MODAL_BUTTON_ACTIONS button actions},
     * by explicitly calling the {@link modalServiceModule.service:ModalManager#methods_close close} or
     * {@link modalServiceModule.service:ModalManager#methods_close dismiss} functions, etc... Depending on how you
     * choose to close a modal, either the modal {@link https://docs.angularjs.org/api/ng/service/$q promise's}
     * {@link https://docs.angularjs.org/api/ng/service/$q successCallback} or {@link https://docs.angularjs.org/api/ng/service/$q errorCallback}
     * will be called. You can use the callbacks to return data from the modal content to the caller of this function.
     *
     * @param {IModalConfig} conf {@link modalServiceModule.interface:IModalConfig IModalConfig}
     *
     * @returns {Promise} {@link https://docs.angularjs.org/api/ng/service/$q promise} that will either be resolved or
     * rejected when the modal window is closed.
     */
    open(conf: IModalConfig): angular.IPromise<any>;
    private angularJSOpen;
    private readonly $uibModalStack;
    private readonly $uibModal;
    private readonly $animate;
}
