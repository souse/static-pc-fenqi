//引入已经激活的首页的样式表
require('../_stylesheets/activated.less');
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
  $(".tab-item > div").on('click', function() {
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
    var tab_id = $(this).attr("tab");
    $(tab_id).removeClass("tab-hide");
    $(tab_id).siblings(".content").addClass("tab-hide");
  });


});
