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
