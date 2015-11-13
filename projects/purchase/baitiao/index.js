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

  $(".tabs-bd").on("click", ".show_children", function() {

    var target = $(this).parents(".tabs-item2-opera").next();
    if (target.hasClass("hide")) {
      target.removeClass("hide");
      $(this).html("收起");
      $(this).removeClass("arrow-show");
      $(this).addClass("arrow-hide");
    } else {
      target.addClass("hide");
      $(this).html("展开");
      $(this).removeClass("arrow-hide");
      $(this).addClass("arrow-show");
    }

  });


  // 待支付订单详情弹出框
  $(".J_pay_order").on('click', function() {
    var $popup = $('#order_detail');
    $popup.find(".J_order_checkbox").removeClass("active");
    var popupInstance = $popup.getInstance();
    popupInstance.show();
  });

  // 已支付订单详情弹出框
  $(".J_repayment_detail").on('click', function() {
    var $popup = $('#repayment_detail');
    var popupInstance = $popup.getInstance();
    popupInstance.show();
  });
  /**
    复选框操作
    1.tr.class=J_disable，表示当前分期已还款，复选框不能操作
    2.tr.class=overdue，表示当前期数已逾期
  */
  $(".J_order_checkbox").on('click', function() {
    var $parent = $(this).parents("tr");
    // J_disable，表示当前分期已还款，复选框不能操作
    if ($parent.hasClass("J_disable")) {
      return false;
    }
    /********** 还款需从当前账期开始连续选择 ***************/
    // 1.选中当前节点
    var $prevAlltr = $parent.prevAll("tr");
    if ($prevAlltr.length > 0) {
      var temp = true;
      $.each($prevAlltr, function(index) {
        if (!$(this).hasClass("J_disable")) {
          if ($(this).find(".active").length == 0) {
            temp = false;
            return false;
          }
        }

      });
    }
    if (temp) {
      // 2.取消选中当前节点
      var $nextAlltr = $parent.nextAll("tr");
      if ($nextAlltr.length > 0) {
        $.each($nextAlltr, function(index) {
          if (!$(this).hasClass("J_disable")) {
            if ($(this).find(".active").length > 0) {
              temp = false;
              return false;
            }
          }

        });
      }
    }
    if (!temp) {
      $("#J_subhd").html("还款需从当前账期开始连续选择").css("color", "red");
      return false;
    } else {
      $("#J_subhd").html("标红的期数表示您逾期未付款，一定要先还逾期的哦").css("color", "#888585");
    }
    /********** END ***************/

    /********** 根据选择复选框，对选中的数据进行统计 ***************/
    var pay_fee = $parent.find("#J_pay_fee").text();
    var process_fee = $parent.find("#J_process_fee").text();
    var overdue_fee = $parent.find("#J_overdue_fee").text();
    // 分别获取本金、手续费、滞纳金、付款总金额
    var $order_detail = $("#order_detail");
    var $J_principal = $("#J_principal", $order_detail);
    var $J_process = $("#J_process", $order_detail);
    var $J_overdue = $("#J_overdue", $order_detail);
    var $J_pay_total = $("#J_pay_total", $order_detail);

    if ($(this).hasClass("active")) {
      $J_process.text(parseInt($J_process.text()) - parseInt(process_fee));
      $J_overdue.text(parseInt($J_overdue.text()) - parseInt(overdue_fee));
      $J_pay_total.text(parseInt($J_pay_total.text()) - parseInt(pay_fee));
    } else {
      $J_process.text(parseInt($J_process.text()) + parseInt(process_fee));
      $J_overdue.text(parseInt($J_overdue.text()) + parseInt(overdue_fee));
      $J_pay_total.text(parseInt($J_pay_total.text()) + parseInt(pay_fee));
    }
    /********** END ***************/

  });

  var quest = "/purchase";
  // 白条-待付款
  $("#J_waitPay").on('click', function() {
    if ($("#J_waitPay_tab").find(".biaotiao-waitPay").length == 0) {
      $("#J_waitPay_tab").load(quest+"/waitPay?currentPage=1&pageSize=10", function(data) {
        UI.run('ui.pagination');
      });
    }
  });

  // 白条-已付款
  $("#J_alreadyPay").on('click', function() {
    if ($("#J_alreadyPay_tab").find(".biaotiao-alreadyPay").length == 0) {
      $("#J_alreadyPay_tab").load(quest+"/alreadyPay?currentPage=1&pageSize=10", function(data) {
        UI.run('ui.pagination');
      });
    }

  });
  $("#J_alreadyRefund").on('click', function() {
    if ($("#J_alreadyRefund_tab").find(".biaotiao-alreadyRefund").length == 0) {
      $("#J_alreadyRefund_tab").load(quest+"/alreadyRefund?currentPage=1&pageSize=10", function(data) {
        UI.run('ui.pagination');
      });
    }

  });


  $(".J_order_checkbox").click(function() {
    var $parentTr = $(this).parents("tr");
    if ($parentTr.hasClass("J_disable")) {
      return false;
    }
  });


  // 白条-全部 分页
  var $pagination = $("#J_all_tab").find('.pagination');
  var paginationInstance = $pagination.getInstance();
  paginationInstance.setOptions({
    onChange: function(page) {
      console.log('current page: ', page);
      $("#J_waitPay_tab").load(quest+"/all?currentPage="+page+"&pageSize=10", function(data) {
        UI.run('ui.pagination');
      });
    }
  });

  //白条-待付款 分页
  var $pagination2 = $("#J_waitPay_tab").find('.pagination');
  var paginationInstance2 = $pagination2.getInstance();
  paginationInstance2.setOptions({
    onChange: function(page) {
      console.log('current page: ', page);
      $("#J_waitPay_tab").load(quest+"/waitPay?currentPage="+page+"&pageSize=10", function(data) {
        UI.run('ui.pagination');
      });
    }
  });

  //白条-已付款 分页
  var $pagination3 = $("#J_alreadyPay_tab").find('.pagination');
  var paginationInstance3 = $pagination3.getInstance();
  paginationInstance3.setOptions({
    onChange: function(page) {
      console.log('current page: ', page);
      $("#J_waitPay_tab").load(quest+"/waitPay?currentPage="+page+"&pageSize=10", function(data) {
        UI.run('ui.pagination');
      });
    }
  });

  //白条-已退款 分页
  var $pagination4 = $("#J_alreadyRefund_tab").find('.pagination');
  var paginationInstance4 = $pagination4.getInstance();
  paginationInstance4.setOptions({
    onChange: function(page) {
      console.log('current page: ', page);
      $("#J_waitPay_tab").load(quest+"/waitPay?currentPage="+page+"&pageSize=10", function(data) {
        UI.run('ui.pagination');
      });
    }
  });



});
