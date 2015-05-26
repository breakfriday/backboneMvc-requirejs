/**
 * Created by dupenghui on 2014/12/4.
 */


({
    baseUrl: '../js',
    out:'../js/appMin.js',

    // call with `node r.js -o build.js`
    // add `optimize=none` to skip script optimization (useful during debugging).

    mainConfigFile: "main.js",
    findNestedDependencies: true,



    optimize: "none",


    name: "main",
    exclude: ['text']

})
