//引入已经激活的首页的样式表
require("../_stylesheets/pieces_pay.less");
require("../_stylesheets/bank.less");
// require bindcard widget.
require("../../../shared/widgets/bindcard");
require("../../../shared/jquery/components/otp");

var popup = require('../../../shared/jquery/components/popup');
var dialog = popup.dialog;
var {
  UI
} = require('../../../shared/jquery/components/core');

/**
 * 支付详情页面入口
 * 入口启动代码放到UI.ready();
 *
 */
UI.ready(function() {

  // $("#J_seccode_submit").on('click', function() {
  //   var $popup = $('#failure_popup');
  //   var popupInstance = $popup.getInstance();
  //   popupInstance.show();
  // });
  $(".J-fenqi-info .fenqi-item").click(function() {
    $(this).addClass('active');
    $(this).siblings().removeClass("active");

    // var fenqiNo = $(this).find(".J-fenqi-no").text();
    // var fenqiMoney = $(this).find(".J-fenqi-money").text();
    // $(".J-fenqi-selectNo").text(parseInt(fenqiNo)-1);
    // $("#J_fenqi_money").text(fenqiMoney);
  });

  // 支付密码校验与提醒
  var pp = require("./pay_pass_prompt");
  pp.init();


  $("#new_bank").on('click', function() {
    var $popup = $('#bank_popup');
    var popupInstance = $popup.getInstance();
    popupInstance.show();
  });

  $("#J_seccode").on('click', function() {
    $(this).addClass("input-success");
    $(this).removeClass("input-error");
  });

  // 支付提交
  $("#J_seccode_submit").on('click', function() {
    // var J_seccode = $("#J_seccode").val();
    // if (J_seccode != undefined && J_seccode.length > 0) {
    //   var $popup = $('#failure_popup');
    //   var popupInstance = $popup.getInstance();
    //   popupInstance.show();

    // } else {
    //   $("#J_seccode").removeClass("input-success");
    //   $("#J_seccode").addClass("input-error");
    //   return false;
    // }
  });



  // 支付银行下拉
  var $dropdown_pay_bank = $(".dropdown_pay_bank").getInstance();
  if ($dropdown_pay_bank != undefined && $dropdown_pay_bank != null) {
    $dropdown_pay_bank.setOptions({
      onSelect: function(event, data) {
        var $targetItem = $(data.target);
        var value = $targetItem.data("value");
        var $object = $targetItem.find('a');
        var $bank_info = $($object).find(".pay_bank_info");
        var bank_id = $bank_info.attr("id");
        var old_bank_id = $(".J_target_bank").attr("id");
        $(".J_target_bank").removeClass("b_" + old_bank_id);
        $(".J_target_bank").addClass("b_" + bank_id);
        $(".J_target_bank").attr("id", bank_id).html($bank_info.html());
        $("#select_bank_id").val(bank_id);
        $dropdown_pay_bank.close();
      }
    });
  }


  // 服务协议弹框
  $("#J_fenqi_agreement").on('click', function(event) {
    event.stopPropagation();
    var $popup_agreement = $('#J_fenqi_agreement_pop');
    var popupInstance = $popup_agreement.getInstance();
    popupInstance.show();
  });





});
