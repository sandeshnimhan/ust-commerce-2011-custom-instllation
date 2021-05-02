import { ComponentFactoryResolver, Injector, Type } from '@angular/core';
import { FundamentalModalManagerService } from '@smart/utils';
import { UpgradeModule } from '@angular/upgrade/static';
import { CompileHtmlNgController } from '../../../directives/CompileHtml';
import { WizardAction, WizardActions } from '../services/WizardActions';
import { WizardStep } from '../services/WizardService';
import { DefaultWizardActionStrategy } from '../services/DefaultWizardActionStrategy';
export declare class ModalWizardTemplateComponent {
    private modalManager;
    private wizardActions;
    private defaultWizardActionStrategy;
    private upgrade;
    private componentFactoryResolver;
    private injector;
    executeAction: (action: WizardAction) => void;
    legacyController: CompileHtmlNgController;
    _wizardContext: {
        _steps: WizardStep[];
        templateUrl?: string;
        component?: Type<any>;
        navActions?: WizardAction[];
        templateOverride?: string;
    };
    private getWizardConfig;
    private wizardService;
    constructor(modalManager: FundamentalModalManagerService, wizardActions: WizardActions, defaultWizardActionStrategy: DefaultWizardActionStrategy, upgrade: UpgradeModule, componentFactoryResolver: ComponentFactoryResolver, injector: Injector);
    ngOnInit(): void;
    private setupNavBar;
    private setupModal;
    private convertActionToButtonConf;
    private assignExternalController;
    private assignLegacyController;
    private assignAngularController;
    private readonly $controller;
}
