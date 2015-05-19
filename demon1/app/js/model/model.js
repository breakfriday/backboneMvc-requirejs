define(function (require) {
    $ = require("jquery")
    _ = require("underscore")
    var pri = {
        name: 1,
        init: function () {
            var dtd = $.Deferred()
            window.setTimeout(function () {
                this.name++
                dtd.resolve()
            }.bind(this), 500)
            return dtd.promise()
        }
    }
    return pri
})
