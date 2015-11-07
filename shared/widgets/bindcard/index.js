//引入已经激活的首页的样式表
var $ = require('jquery');
require("./bindcard.less");
require('../../jquery/components/validate/jquery.form')($);
require('../../jquery/components/button');
require("../../jquery/components/otp");
require("../../jquery/components/dropdown");
var validatorLib = require("../../jquery/components/validate");
var {
  UI
} = require('../../jquery/components/core');

var $submitbutton;
var validateOptions = $.extend({}, validatorLib.DEFAULTS, {
  rules: {
    //  the name-field mapping, the `mobile` is form field name.
    mobile: {
      required: true,
      isMobile: true
    },
    email: {
      required: true,
      email: true
    },
    smsCode: {
      required: true
    },
    name: {
      required: true
    },
    idcard: {
      required: true,
      idCard: true
    },
    yinhang_value: {
      required: true
    }
  },
  // Key/value pairs defining custom messages. Key is the name of an element, value the message to display for that element.
  // Instead of a plain message, another map with specific messages for each rule can be used.
  messages: {
    name: "请填写真实姓名",
    email: "请填写正确的邮箱地址",
    mobile: {
      required: "请填写手机号码",
      isMobile: "请填写正确的手机号码"
    },
    smsCode: {
      required: "请填写短信验证码"
    },
    idcard: {
      required: "请填写身份证号",
      idCard: "请填写正确的身份证号"
    },
    yinhang_value: {
      required: "请选择银行卡"
    }
  },
  submitHandler: function(form) {
    $(form).ajaxSubmit({
      // pre-submit callback
      beforeSubmit: function() {
        $submitbutton.button('loading');
        console.log('pre-submit callback');
      },
      // post-submit callback
      success: function() {
        console.log('post-submit callback');
        $submitbutton.button('reset');
      }
    });
  }
});

/**
 * 绑定银行卡页面
 * 入口启动代码放到UI.ready();
 *
 */
UI.ready(function() {
  var $form = $("#J_bind_form");
  $submitbutton = $('#J_bindcard_submit');

  var validator = $form.validate(validateOptions);

  var otpInstance = $('.plugin-otp', $form).getInstance();

  otpInstance.setOptions({

    otpHasPassedCallback: function(result) {
      console.log(result);
    },
    getExtraData: function() {
      return {
        extraData: {
          name: 'tianyingchun'
        }
      }
    }
  });
  console.log(otpInstance)
    // for dropdown.
  var $dropdown_year = $(".dropdown_year", $form).getInstance();
  if ($dropdown_year != undefined && $dropdown_year != null) {
    $dropdown_year.setOptions({
      onSelect: function(event, data) {
        var $targetItem = $(data.target);
        var value = $targetItem.data("value");
        var text = $targetItem.find('a').text();
        var $inputBankId = $(this).find('[name="year_id"]');
        var $yinhang_value = $(this).find('[name="year_value"]');
        $inputBankId.val(value);
        $yinhang_value.val(text);
        $dropdown_year.close();
      }
    });
  }

  var $dropdown_month = $(".dropdown_month", $form).getInstance();
  if ($dropdown_month != undefined && $dropdown_month != null) {
    $dropdown_month.setOptions({
      onSelect: function(event, data) {
        var $targetItem = $(data.target);
        var value = $targetItem.data("value");
        var text = $targetItem.find('a').text();
        var $inputBankId = $(this).find('[name="month_id"]');
        var $yinhang_value = $(this).find('[name="month_value"]');
        $inputBankId.val(value);
        $yinhang_value.val(text);
        $dropdown_month.close();
      }
    });
  }

}, 'bindcard');
