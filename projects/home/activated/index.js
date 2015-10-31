//引入已经激活的首页的样式表
require('../_stylesheets/activated.less');
require('../../../shared/jquery/components/timeline');
require('../../../shared/jquery/components/tabs');
var {
    UI
} = require('../../../shared/jquery/components/core');


/**
 * 已经激活后的分期首页入口
 * 入口启动代码放到UI.ready();
 *
 */
UI.ready(function() {
    $('body').css("width", "800px").css("margin", "auto auto");
    $("#tt").val("我是nodejs");
});


var activated = {

    getName: function() {

        alert("xiugang");
    }


}

// 测试  无法调用
function tt() {
    alert("xugang");
}


$(function() {

    $("#tt").click(function() {
        alert("mmmxxx");
    });


});
