var gulp = require('gulp');
var rjs = require('requirejs');

gulp.task('build', function(cb){
    rjs.optimize({
        baseUrl: '../js',
        out:'../js/appMin.js',

        // call with `node r.js -o build.js`
        // add `optimize=none` to skip script optimization (useful during debugging).

        mainConfigFile: "main.js",
        findNestedDependencies: true,



        optimize: "none",


        name: "main",
        exclude: ['text']

    }, function(buildResponse){
        console.log('build response', buildResponse);
        cb();
    }, cb);
});

gulp.task('default', ['build']);