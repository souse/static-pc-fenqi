// 分期支付页面支付密码校验与提醒
module.exports = {

  init: function() {
    this.click();
  },
  click: function() {
    // 支付提交按钮
    // $("#pay_submit").on('click', function() {
    //   // 判断是否输入支付密码
    //   if (!validate_password()) {
    //     show_prompt("failure", "请输入支付密码");
    //     return false;
    //   }

    //   // 选中支付协议
    //   var istrue = $("#J_agreement_checkout").hasClass("active");
    //   if (!istrue) {
    //     alert("请勾选我已阅读《支付协议》");
    //     return false;
    //   }
    //   var $popup = $('#seccode_popup');
    //   var popupInstance = $popup.getInstance();
    //   popupInstance.show();
    // });

    // 支付密码框
    $("#J_pay_password").on('click', function() {
      if (!validate_password()) {
        show_prompt("failure", "请输入支付密码");
      }
    }).on('blur', function() {
      if (!validate_password()) {
        show_prompt("failure", "请输入支付密码");
      } else {
        show_prompt("", "请输入支付密码");
      }

    });

  }
}



// 验证支付密码
function validate_password() {
  var payPassword = $("#J_pay_password").val();
  if (payPassword == undefined || payPassword.length == 0) {
    return false;
  }
  return true;
}
// 支付密码框提醒
function show_prompt(status, prompt) {
  if (status == "failure") {
    $("#pay_prompt").show().html(prompt).addClass("pay_failure_prompt").removeClass("pay_prompt");
    $("#J_pay_password").focus();
  } else {
    $("#pay_prompt").show().html(prompt).removeClass("pay_failure_prompt").addClass("pay_prompt");
  }
}
