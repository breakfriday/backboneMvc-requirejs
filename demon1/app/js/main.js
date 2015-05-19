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

/*
function main() {
    requirejs(['ctrl/ct1'], function ($) {
        var router = new BackboneMVC.Router(); //use the new automatic router
        //still call Backbone's facility here
        //call ToyController's setup action to generate links for `changeColor` action
        window.location.hash = "#ct1/index"
        Backbone.history.start();
        */
/*  new MyApp.Controllers.ToyController()
         new MyApp.Controllers.productController()*//*


    });
}*/

function main() {
    var route_class = BackboneMVC.Router.extend({
        routes: {

            '(:controller)(/:action)(/*path)':                 "navigator"

        },
        navigator:function(controller, action, path){
            var controller = _.isEmpty(controller) ? defaultHash[0] || 'index' : controller,
                action = _.isEmpty(action) ? defaultHash[1] || 'index' : action,
                fragment = controller + '/' + action + (_.isEmpty(path) ? '' : '/' + path);
            var self=this
            switch (controller) {
                case "ct0":
                    require(['ctrl/ct0'], function (ctrl) {
                        ctrl()
                        self.navigate(fragment, {
                            trigger: true,//触发action
                            replace: true
                        });

                    });
                    break;


                case "ct1":
                require(['ctrl/ct1'], function (ctrl) {
                    ctrl()
                    self.navigate(fragment, {
                        trigger: true,//触发action
                        replace: true
                    });
                });
                break;

                case "ct2":
                    require(['ctrl/ct2'], function (ctrl) {
                        ctrl()
                        self.navigate(fragment, {
                            trigger: true,//触发action
                            replace: true
                        });
                    });
                    break;
            }

        }

    })

    var router = new route_class(); //use the new automatic router
    //still call Backbone's facility here
    //call ToyController's setup action to generate links for `changeColor` action
    window.location.hash = "#ct0/index"
    Backbone.history.start();



}