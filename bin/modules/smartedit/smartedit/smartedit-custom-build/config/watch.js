/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 */
module.exports = function() {
    return {
        targets: ['options', 'test', 'test_only', 'packageDev', 'package'],
        config: function(data, conf) {
            var paths = require('../paths');

            return {
                options: {
                    atBegin: true
                },
                test: {
                    files: paths.watchFiles.concat(['web/app/**/*', paths.tests.allUnit]),
                    tasks: ['test']
                },
                test_only: {
                    files: paths.watchFiles.concat([paths.tests.allUnit]),
                    tasks: ['unit']
                },
                packageDev: {
                    files: paths.watchFiles.concat(['web/app/**/*']),
                    tasks: ['packageDev']
                },
                package: {
                    files: paths.watchFiles.concat(['web/app/**/*']),
                    tasks: ['package']
                }
            };
        }
    };
};
