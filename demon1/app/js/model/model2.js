define(function (require, module, exports) {
    $ = require("jquery")
    _ = require("underscore")


    var propise = {
        name: 5,
        init: function () {
            var dtd = $.Deferred()
            window.setTimeout(function () {
                this.name--
                if (this.name > 0) {
                    dtd.resolve()
                }
                else {
                    dtd.reject()
                }
            }.bind(this), 500)
            dtd.notify()
            return dtd.promise()
        }
    }


    var promiseFun = function () {

    }

    promiseFun.prototype = propise
    return promiseFun


})

