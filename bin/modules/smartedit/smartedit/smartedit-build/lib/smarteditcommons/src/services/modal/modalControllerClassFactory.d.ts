import * as angular from 'angular';
import { ModalManager } from './ModalManager';
import { IModalConfig } from './IModalConfig';
import { SeConstructor } from '../../di';
export interface ModalControllerScope extends angular.IScope {
    modalController: IModalController;
    [name: string]: any;
}
export interface IModalController extends angular.IController {
    _modalManager: ModalManager;
    templateUrl: string;
    templateInline: string;
    init(): void;
    close(data?: any): void;
    dismiss(data?: any): void;
    _getModalType(): string;
}
export declare function modalControllerClassFactory(conf: IModalConfig): SeConstructor<IModalController>;
