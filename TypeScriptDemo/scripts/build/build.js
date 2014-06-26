// Build configuration guide can be found 
// at: https://github.com/jrburke/r.js/blob/master/build/example.build.js
({
    name: 'main',
    baseUrl: '../',
    optimize: 'none',
    // optimize: 'uglify2',
    paths: { requireLib: 'libs/require' },
    preserveLicenseComments: false,
    generateSourceMaps: true,

    //This module entry shows how to specify a specific module be excluded
    //from the built module file. excludeShallow means just exclude that
    //specific module, but if that module has nested dependencies that are
    //part of the built file, keep them in there. This is useful during
    //development when you want to have a fast bundled set of modules, but
    //just develop/debug one or two modules at a time.
    // excludeShallow: ['jqueryui-custom'],

    include: ['requireLib'],
    mainConfigFile: '../main.js',
    out: '../application.js',
    // A function that if defined will be called for every file read in the
    // build that is done to trace JS dependencies.
    // Remove references to console.log(...)
    onBuildRead: function (moduleName, path, contents) {
        // Add timestamp during build so that 
        // new scripts are loaded after deployment:
        if (moduleName === 'main'){
            contents = contents.replace(/\$TIMESTAMP\$/g, (new Date()).getTime());
        }
        
        // var stripConsole = false;
        // // If plugin and does not use define(...):
        // if (moduleName.indexOf('plugins/') === 0 && !/\b(define)\s*\(/.test(contents)) {
        //     console.log('Wrapping plugin: ' + moduleName);
        //     var amdWrapper = "(function (factory) { 'use strict'; define(['jquery'], factory); }(function ($){ var jQuery = $; \r\n/*plugin*/\r\n }));";
        //     contents = amdWrapper.replace('/*plugin*/', contents);
        // }
        // if (stripConsole) {
        //     contents = contents.replace(/console.log(.*);/g, '');
        // }
        return contents;
    },
    onBuildWrite: function (moduleName, path, contents) {
        // Add extra stuff;
        return contents;
    }
})
