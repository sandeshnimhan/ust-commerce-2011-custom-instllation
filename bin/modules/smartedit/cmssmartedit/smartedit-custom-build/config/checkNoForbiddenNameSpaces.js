/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 */
module.exports = function() {
    var lodash = require('lodash');

    return {
        config: function(data, _conf) {
            const conf = lodash.cloneDeep(_conf);

            conf.mappings.forEach((mapping) => {
                mapping.level = 'FATAL';
            });
            return conf;
        }
    };
};
