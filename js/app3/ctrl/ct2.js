define(function (require) {
    BackboneMVC = require("BackboneMVC")
    $ = require("jquery")
    _ = require("underscore")

    return function(){
        BackboneMVC.namespace('MyApp.Controllers');
        MyApp.Controllers.ToyController = BackboneMVC.Controller.extend({
            name: 'ct2', /* the only mandatory field */
            index: function () {
                 alert("this is ct2")
            },

            test1: function () {
                var model=require('model/model')

                model.init().done(function () {
                    $(".pages").append("<div style='color: red'>test0 done  " + model.name+"</div>")
                }).fail(function () {
                    alert("not ok")
                })
                this.model=undefined
            },

            test2: function () {
                var model=require("model/model2")
                var view1=require("view/view2")


                var model = this.model = this.model || new  model
                model.init().done(function () {
                    view1.sucess(model.name)
                    if (model.name > 1) {
                        this.test2()
                    }
                }.bind(this)).fail(function () {
                    view1.fail()
                }).progress(function () {
                    view1.progess()
                })
            }



        });
    }


});
