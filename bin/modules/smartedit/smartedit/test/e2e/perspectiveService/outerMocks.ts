/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 */

import { NgModule } from '@angular/core';

import { moduleUtils, HttpBackendService, SeEntryModule } from 'smarteditcommons';

import { OuterAuthorizationMocks } from '../utils/commonMockedModules/outerAuthorizationMock';
import { OuterWhoAmIMocks } from '../utils/commonMockedModules/outerWhoAmIMocks';
import { OuterConfigurationMocks } from '../utils/commonMockedModules/outerConfigurationMock';
import { i18nMocks } from '../utils/commonMockedModules/outerI18nMock';
import { OuterLanguagesMocks } from '../utils/commonMockedModules/outerLanguagesMock';
import { OuterOtherMocks } from '../utils/commonMockedModules/outerOtherMock';
import { OuterPreviewMocks } from '../utils/commonMockedModules/outerPreviewMock';
import { OuterSitesMocks } from '../utils/commonMockedModules/outerSitesMock';
import { E2eOnLoadingSetupModule } from '../outerE2eOnLoadingSetup';
import { OuterPermissionMocks } from '../utils/commonMockedModules/outerPermissionMocks';
import { ADMIN_AUTH, CMSMANAGER_AUTH } from '../utils/outerConstants';

function parse(type: string) {
    return typeof type === 'string' ? JSON.parse(type) : type;
}

@SeEntryModule('OuterMocksModule')
@NgModule({
    imports: [
        OuterAuthorizationMocks,
        OuterWhoAmIMocks,
        OuterConfigurationMocks,
        i18nMocks,
        OuterLanguagesMocks,
        OuterOtherMocks,
        OuterPreviewMocks,
        OuterSitesMocks,
        E2eOnLoadingSetupModule,
        OuterPermissionMocks
    ],

    providers: [
        moduleUtils.provideValues({
            SMARTEDIT_ROOT: 'web/webroot',
            SMARTEDIT_RESOURCE_URI_REGEXP: /^(.*)\/test\/e2e/
        }),
        moduleUtils.bootstrap(
            (httpBackendService: HttpBackendService) => {
                httpBackendService.matchLatestDefinitionEnabled(true);

                httpBackendService.whenGET(/test\/e2e/).passThrough();
                httpBackendService.whenGET(/static-resources/).passThrough();

                const map = [
                    {
                        value: '"thepreviewTicketURI"',
                        key: 'previewTicketURI'
                    },
                    {
                        value:
                            '{"smartEditContainerLocation":"/test/e2e/perspectiveService/generated_outerapp.js"}',
                        key: 'applications.Outerapp'
                    },
                    {
                        value:
                            '{"smartEditLocation":"/test/e2e/perspectiveService/generated_innerapp.js"}',
                        key: 'applications.Innerapp'
                    },
                    {
                        value: '"/cmswebservices/v1/i18n/languages"',
                        key: 'i18nAPIRoot'
                    }
                ];

                httpBackendService
                    .whenGET(/smartedit\/configuration/)
                    .respond((method, url, data, headers) => {
                        const hasConfigurations =
                            parse(sessionStorage.getItem('HAS_CONFIGURATIONS')) !== false;
                        if (
                            hasConfigurations ||
                            headers.Authorization === 'bearer ' + ADMIN_AUTH.access_token ||
                            headers.Authorization === 'bearer ' + CMSMANAGER_AUTH.access_token
                        ) {
                            return [200, map];
                        } else {
                            return [401, null];
                        }
                    });
            },
            [HttpBackendService]
        )
    ]
})
export class OuterMocksModule {}

window.pushModules(OuterMocksModule);
