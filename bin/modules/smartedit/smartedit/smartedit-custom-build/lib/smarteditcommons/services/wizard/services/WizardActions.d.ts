import { TypedMap } from '@smart/utils';
import { Type } from '@angular/core';
import { WizardService } from './WizardService';
export interface WizardAction {
    id?: string;
    i18n?: string;
    component?: Type<any>;
    controller?: string | (new (...args: any[]) => any);
    controllerAs?: string;
    isMainAction?: boolean;
    destinationIndex?: number;
    stepIndex?: number;
    wizardService?: WizardService;
    properties?: TypedMap<any>;
    isCurrentStep?(): boolean;
    enableIfCondition?(): boolean;
    executeIfCondition?(): boolean | Promise<any>;
    execute?(wizardService: WizardService): void;
}
export declare class WizardActions {
    customAction(configuration: WizardAction): WizardAction;
    done(configuration?: WizardAction): WizardAction;
    next(configuration?: WizardAction): WizardAction;
    navBarAction(configuration: WizardAction): WizardAction;
    back(configuration: WizardAction): WizardAction;
    cancel(): WizardAction;
    private createNewAction;
}
