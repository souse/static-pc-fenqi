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


  var billAll = require('./billAll');

  // 待支付订单详情弹出框
  billAll.bindPayPopup();




  var quest = "/purchase";
  // 加载 白条-待付款 数据
  var waitPay = require("./waitPay");
  waitPay.waitPayLoad(quest);


  // 白条-已付款
  var alreadyPay = require("./alreadyPay");
  alreadyPay.alreadyPayLoad(quest);
   // 已支付订单详情弹出框
  alreadyPay.repaymentDetail();

 // 白条-已退款
  var alreadyRefund = require("./alreadyRefund");
  alreadyRefund.alreadyRefundLoad(quest);



  // modify by yj
  // 白条-全部 分页
  var $pagination = $("#J_all_tab").find('.pagination');
  var paginationInstance = $pagination.getInstance();
  paginationInstance.setOptions({
    onChange: function(page) {
      console.log('current page: ', page);
      $("#J_all_tab").load(quest + "/all?currentPage=" + page + "&pageSize=10", function(data) {
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
      $("#J_waitPay_tab").load(quest + "/waitPay?currentPage=" + page + "&pageSize=10", function(data) {
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
      $("#J_alreadyPay_tab").load(quest + "/alreadyPay?currentPage=" + page + "&pageSize=10", function(data) {
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
      $("#J_alreadyRefund_tab").load(quest + "/alreadyRefund?currentPage=" + page + "&pageSize=10", function(data) {
        UI.run('ui.pagination');
      });
    }
  });



});
