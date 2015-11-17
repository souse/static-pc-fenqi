//引入已经激活的首页的样式表
require('../_stylesheets/nonactivated.less');
require('../../../shared/jquery/components/tabs');

var {
  UI
} = require('../../../shared/jquery/components/core');

var popup = require('../../../shared/jquery/components/popup');
var dialog = popup.dialog;


/**
 * 未激活后的分期首页入口
 * 入口启动代码放到UI.ready();
 *
 */
UI.ready(function() {

  var $popup = $('#J_open_baitiao');
  var popupInstance = $popup.getInstance();
  popupInstance.show();

  $(".tab-item > div").on('click', function() {
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
    var tab_id = $(this).attr("tab");
    $(tab_id).removeClass("tab-hide");
    $(tab_id).siblings(".content").addClass("tab-hide");
  });


});
