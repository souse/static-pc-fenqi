//引入已经激活的首页的样式表
require('../_stylesheets/baitiao.less');

require('../../../shared/jquery/components/timeline');
require('../../../shared/jquery/components/tabs');
require('../../../shared/jquery/components/button');
require("../../../shared/jquery/components/pagination");
var popup = require('../../../shared/jquery/components/popup');
var dialog = popup.dialog;
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
      if ($(this).parents(".timeline-item").find(".tail-end").length > 0) {
        $(this).parents(".timeline-item").find(".timeline-item-tail").removeClass("tail-end");
        $(this).parents(".timeline-item").find(".timeline-item-tail").addClass("tail-flag");
        $(this).parents(".timeline-item").find(".timeline-item-tail").height(ss - 25);
      }
    } else {
      target.addClass("hide");
      $(this).html("展开");
      $(this).removeClass("arrow-hide");
      $(this).addClass("arrow-show");

      if ($(this).parents(".timeline-item").find(".tail-flag").length > 0) {
        $(this).parents(".timeline-item").find(".timeline-item-tail").addClass("tail-end");
        $(this).parents(".timeline-item").find(".timeline-item-tail").removeClass("tail-flag");
        //$(this).parents(".timeline-item").find(".timeline-item-tail").height(ss);
      }
    }

  });



  $(".J_pay-order").on('click', function() {
    var $popup = $('#order_detail');
    var popupInstance = $popup.getInstance();
    popupInstance.show();
  });

  $(".J_order_checkbox").on('click', function() {
    var $parent = $(this).parents("tr");
    var pay_fee = $parent.find("#J_pay_fee").text();
    var process_fee = $parent.find("#J_process_fee").text();
    var overdue_fee = $parent.find("#J_overdue_fee").text();
    // 分别获取本金、手续费、滞纳金、付款总金额
    var $order_detail = $("#order_detail");
    var $J_principal=$("#J_principal",$order_detail);
    var $J_process=$("#J_process",$order_detail);
    var $J_overdue=$("#J_overdue",$order_detail);
    var $J_pay_total=$("#J_pay_total",$order_detail);

    if($(this).hasClass("active")){
      $J_process.text(parseInt($J_process.text()) - parseInt(process_fee));
      $J_overdue.text(parseInt($J_overdue.text()) - parseInt(overdue_fee));
      $J_pay_total.text(parseInt($J_pay_total.text()) - parseInt(pay_fee));
    }else{
      $J_process.text(parseInt($J_process.text()) + parseInt(process_fee));
      $J_overdue.text(parseInt($J_overdue.text()) + parseInt(overdue_fee));
      $J_pay_total.text(parseInt($J_pay_total.text()) + parseInt(pay_fee));
    }


    console.log(pay_fee,process_fee,overdue_fee)
  });


});
