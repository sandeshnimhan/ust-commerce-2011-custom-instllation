/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 */
module.exports = function() {
    return {
        config: function(data, conf) {
            const path = require('path');
            return {
                options: {
                    configuration: path.join(
                        global.smartedit.bundlePaths.bundleRoot,
                        'config/tslint.json'
                    ),
                    force: false,
                    fix: false
                }
            };
        }
    };
};
