define(function (require) {
    $ = require("jquery")
    _ = require("underscore")
    tpl=require("text!templete/view1.html")

    var ClassView = {
        sucess: function (parm) {
            var data={"parm":parm}
            var html= _.template(tpl,data)
            $(".pages").append(html)
            /* $(".pages").append("<div>"+parm + " ok"+"</div>")*/
        },
        fail: function () {
            alert("failed  deffer reject")
        },
        progess:function(){
            $(".pages").append("<div style='display: inline-block; margin: 0px 5px; color: yellowgreen'>lease wait</div>")
        }
    }

    return ClassView
})
