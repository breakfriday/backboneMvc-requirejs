define(function (require) {
    BackboneMVC = require("BackboneMVC")
    $ = require("jquery")
    _ = require("underscore")

    return function(){
        BackboneMVC.namespace('MyApp.Controllers');
        MyApp.Controllers.ToyController = BackboneMVC.Controller.extend({
            name: 'ct0', /* the only mandatory field */
            index: function () {
                alert(" this is controller 0 ")
            }
        });
    }


});
