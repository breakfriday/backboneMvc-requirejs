/**
 * Created by dupenghui on 2014/12/4.
 */

requirejs.config({
    baseUrl: '../js',
    paths: {
        lib: "./libs",
        templete: "../html/templete",
        jquery: './libs/jquery/dist/jquery',
        'BackboneMVC': './libs/backbone-mvc/backbone-mvc',
        'backbone': './libs/backbone/backbone',
        'underscore': './libs/underscore/underscore',
        'controllers': 'ctrl',
        "text": "./libs/requirejs-text/text"
    },
    shim: {
        'Backbone': ['underscore'],
        'BackboneMVC': ['backbone']
    }
});

requirejs(['jquery',"BackboneMVC"], function ($) {
    $(document).ready(main);
});