/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 */
const { promisify } = require('util');
const exec = promisify(require('child_process').exec);
const mkdirp = promisify(require('fs-extra').mkdirp);

const backendMockPath = `${process.cwd()}`;
const contractWorkspace = `${backendMockPath}/fixtures/contracts/`;
const config = require(`${backendMockPath}/config.json`);

// Download Swagger contracts
(async () => {
    try {
        const contractConfig = config.contractTestConfig;

        await mkdirp(`${contractWorkspace}`);

        await exec(
            `${__dirname}/getSmarteditAPIs.sh ${contractConfig.repositoryUrl} ${
                contractConfig.mavenArtifact
            } ${contractConfig.version} "${contractConfig.contracts}" ${contractWorkspace}`
        );
    } catch (e) {
        console.log(e);
        process.exit(1);
    }
})();
