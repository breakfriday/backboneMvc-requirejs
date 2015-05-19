define(function (require) {
    BackboneMVC = require("BackboneMVC")
    $ = require("jquery")
    _ = require("underscore")

    return function(){
        BackboneMVC.namespace('MyApp.Controllers');
        MyApp.Controllers.ToyController = BackboneMVC.Controller.extend({
            name: 'ct1', /* the only mandatory field */
            index: function () {
              alert("ct1")
            },


            test1: function () {
                require(['model/model'],function(model){

                    model.init().done(function () {
                        $(".pages").append("<div style='color: red'>test0 done  " + model.name+"</div>")
                    }).fail(function () {
                        alert("not ok")
                    })
                    this.model=undefined
                }.bind(this))

            },

            test2: function () {
                require(["model/model2", "view/view2"], function (model, view1) {
                    var model = this.model = this.model || new  model
                    model.init().done(function () {
                        view1.sucess(model.name)
                        this.test2()

                    }.bind(this)).fail(function () {
                        view1.fail()


                    }).progress(function () {
                        view1.progess()
                    })


                }.bind(this))
            }


        });
    }


});
