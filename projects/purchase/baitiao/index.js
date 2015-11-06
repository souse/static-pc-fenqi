//引入已经激活的首页的样式表
require('../_stylesheets/baitiao.less');

require('../../../shared/jquery/components/timeline');
require('../../../shared/jquery/components/tabs');
require("../../../shared/jquery/components/pagination");
var {
  UI
} = require('../../../shared/jquery/components/core');


UI.ready(function() {

  $(".show_children").click(function() {

    var target = $(this).parents(".tabs-item2-opera").next();
    if (target.hasClass("hide")) {
      target.removeClass("hide");
      $(this).html("收起");
      $(this).removeClass("arrow-show");
      $(this).addClass("arrow-hide");
      var ss = $(this).parents(".baitiao-body-tabs-content").height();
      if($(this).parents(".timeline-item").find(".tail-end").length>0){
        $(this).parents(".timeline-item").find(".timeline-item-tail").removeClass("tail-end");
        $(this).parents(".timeline-item").find(".timeline-item-tail").addClass("tail-flag");
        $(this).parents(".timeline-item").find(".timeline-item-tail").height(ss-25);
      }
    } else {
      target.addClass("hide");
      $(this).html("展开");
      $(this).removeClass("arrow-hide");
      $(this).addClass("arrow-show");

      if($(this).parents(".timeline-item").find(".tail-flag").length>0){
        $(this).parents(".timeline-item").find(".timeline-item-tail").addClass("tail-end");
        $(this).parents(".timeline-item").find(".timeline-item-tail").removeClass("tail-flag");
        //$(this).parents(".timeline-item").find(".timeline-item-tail").height(ss);
      }
    }

  });
});