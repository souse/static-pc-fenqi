//引入已经激活的首页的样式表
require("../_stylesheets/pieces_pay.less");
// require bindcard widget.
require("../../../shared/widgets/bindcard");
require("../../../shared/jquery/components/otp");

var popup = require('../../../shared/jquery/components/popup');
var dialog = popup.dialog;
var {
  UI
} = require('../../../shared/jquery/components/core');

/**
 * 分期支付-第一步
 * 入口启动代码放到UI.ready();
 *
 */
UI.ready(function() {

  // $("#J_seccode_submit").on('click', function() {
  //   var $popup = $('#failure_popup');
  //   var popupInstance = $popup.getInstance();
  //   popupInstance.show();
  // });

  $("#pay_submit").on('click', function() {
    var $popup = $('#seccode_popup');
    var popupInstance = $popup.getInstance();
    popupInstance.show();
  });


  $("#new_bank").on('click', function() {
    var $popup = $('#bank_popup');
    var popupInstance = $popup.getInstance();
    popupInstance.show();
  });

  $("#J_seccode").on('click', function() {
    $(this).addClass("input-success");
    $(this).removeClass("input-error");
  });

  var J_seccode_submit = $("#J_seccode_submit");
  var J_seccode = $("#J_seccode").val();
  $("#J_seccode_submit").on('click', function() {
    if (J_seccode != undefined && J_seccode.length > 0) {
      var $popup = $('#failure_popup');
      var popupInstance = $popup.getInstance();
      popupInstance.show();
      return true;
    } else {
      $("#J_seccode").removeClass("input-success");
      $("#J_seccode").addClass("input-error");
      return false;
    }
  });

});
