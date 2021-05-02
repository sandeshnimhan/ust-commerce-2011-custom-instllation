module.exports = function(grunt) {

    var fs = require('fs');


    // For each extension in folder web/featureExtensions:
    // Inject an 'import' statement of the barrel file (if it exist) for each frame (personalizationsmartedit and personalizationsmarteditContainer)
    grunt.registerTask('injectExtensionsImports', function() {

        var paths = require("../../jsTests/paths");

        let taskConfig;

        grunt.file.expand({
            filter: 'isDirectory'
        }, "web/featureExtensions/*/").forEach(function(dir) {

            taskConfig = taskConfig || {};

            var folderName = dir.replace("web/featureExtensions/", "");
            folderName = folderName.substring(0, folderName.indexOf('/'));
            var files = [];
            if (fs.existsSync('web/featureExtensions/' + folderName + '/personalizationsmartedit/index.ts')) {
                files.push({
                    append: "\nimport {${folderName}Module} from '../../featureExtensions/${folderName}/personalizationsmartedit';\n!!${folderName}Module;",
                    input: paths.target.featureExtensionsSmartEditImport
                });
            }
            if (fs.existsSync('web/featureExtensions/' + folderName + '/personalizationsmarteditcontainer/index.ts')) {
                files.push({
                    append: "\nimport {${folderName}Module} from '../../featureExtensions/${folderName}/personalizationsmarteditcontainer';\n!!${folderName}Module;",
                    input: paths.target.featureExtensionsSmartEditContainerImport
                });
            }
            if (files.length) {
                taskConfig[dir] = {
                    files: files
                };
            }
        });

        if (taskConfig) {
            grunt.config.set('file_append', taskConfig);
            grunt.task.run('file_append');
        }
    });

};
