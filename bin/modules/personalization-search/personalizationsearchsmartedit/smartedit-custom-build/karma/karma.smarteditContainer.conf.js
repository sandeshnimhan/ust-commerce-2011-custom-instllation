/*
 * Copyright (c) 2019 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This software is the confidential and proprietary information of SAP
 * ("Confidential Information"). You shall not disclose such Confidential
 * Information and shall use it only in accordance with the terms of the
 * license agreement you entered into with SAP.
 */
const lodash = require('lodash');

const base = require('../../smartedit-build/config/karma/karma.ext.smartedit.conf');
const bundlePaths = require('../../smartedit-build/bundlePaths');

const {
    compose,
    merge,
    add
} = require('../../smartedit-build/builders');

const karma = compose(
    merge({
        junitReporter: {
            outputDir: 'jsTarget/tests/personalizationsearchsmarteditContainer/junit/', // results will be saved as $outputDir/$browserName.xml
            outputFile: 'testReport.xml' // if included, results will be saved as $outputDir/$browserName/$outputFile
        },

        // list of files / patterns to load in the browser
        files: lodash.concat(
            bundlePaths.test.unit.smarteditContainerUnitTestFiles,
            bundlePaths.test.unit.commonUtilModules, [
                'jsTarget/web/features/personalizationsearchsmarteditContainer/**/*.js',
                'jsTarget/web/features/personalizationsearchsmarteditContainer/templates.js',
                'jsTests/tests/personalizationsearchsmarteditContainer/unit/specBundle.ts'
            ]
        ),

        webpack: require('../webpack/webpack.karma.smarteditContainer.config'),
    }),
    add('exclude', [
        'jsTarget/web/features/personalizationsearchsmarteditContainer/personalizationsearchsmarteditcontainerModule.ts',
        '**/*.d.ts',
        '*.d.ts'
    ], true)
)(base);

module.exports = function(config) {
    config.set(karma);
};
