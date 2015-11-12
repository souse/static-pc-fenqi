//引入已经激活的首页的样式表
var $ = require('jquery');
require("./bindcard.less");
require("./bankcard-popup.less")
require("../supportbank");
require('../../jquery/components/validate/jquery.form')($);
require('../../jquery/components/button');
require("../../jquery/components/otp");
require("../../jquery/components/dropdown");
var popup = require('../../jquery/components/popup');
var dialog = popup.dialog;
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
    CVV2: {
      required: true
    },
    bankCard: {
      required: true,
      bankCard: true
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
    bankCard: {
      required: "请填写银行卡号",
      bankCard: "请填写正确的卡号"
    },
    idcard: {
      required: "请填写身份证号",
      idCard: "请填写正确的身份证号"
    },
    yinhang_value: {
      required: "请选择银行卡"
    },
    CVV2: {
      required: "请输入卡背面3位数字"
    }
  },
  submitHandler: function(form) {
    $(form).ajaxSubmit({
      type: "post",
      dataType:"json",
      url: "/test?time=" + (new Date()).getTime(),
      // pre-submit callback
      beforeSubmit: function() {
        $submitbutton.val('loading...');
      },
      // post-submit callback
      success: function(data) {
        console.log(data);
        alert(data.status);
        $submitbutton.val('reset');
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
  $submitbutton.on('click', function() {
    validator.form();
    // 校验银行卡有效期
    var year_name = $("#J_year_name").val();
    var month_name = $("#J_month_name").val();
    var $object = $("#J_year_name").parents(".form-group");

    $object.find('.error').remove();
    if (year_name == undefined || year_name.length == 0 || year_name == "年") {
      if ($object.find('.error').length == 0) {
        $object.append('<span  class="error">请选择银行卡有效期</span>');
        return false;
      }
    }
    if (month_name == undefined || month_name.length == 0 || month_name == "月") {
      if ($object.find('.error').length == 0) {
        $object.append('<span  class="error">请选择银行卡有效期</span>');
        return false;
      }
    }
    console.log(validator.valid());
  });

  // 校验银行卡有效期
  $(".dropdown_year .dropdown-content a").on('click', function() {
    var $object = $("#J_year_name").parents(".form-group");
    var month_name = $("#J_month_name").val();
    if (month_name != undefined && month_name.length != 0 && month_name != "月") {
      if ($object.find(".success").length == 0) {
        $object.addClass("form-success");
        $object.append('<span class="form-tips success"></span>');
      }
      $object.find(".error").remove();
    }

  });
  // 校验银行卡有效期
  $(".dropdown_month .dropdown-content a").on('click', function() {
    var $object = $("#J_year_name").parents(".form-group");
    var year_name = $("#J_year_name").val();
    if (year_name != undefined && year_name.length != 0 && year_name != "年") {
      if ($object.find(".success").length == 0) {
        $object.addClass("form-success");
        $object.append('<span class="form-tips success"></span>');
      }
      $object.find(".error").remove();
    }
  });




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
    // for dropdown.
  var $dropdown_year = $(".dropdown_year", $form).getInstance();
  if ($dropdown_year != undefined && $dropdown_year != null) {
    $dropdown_year.setOptions({
      onSelect: function(event, data) {
        var $targetItem = $(data.target);
        var value = $targetItem.data("value");
        var text = $targetItem.find('a').text();
        var $year_id = $(this).find('[name="year_id"]');
        var $year_name = $(this).find('[name="year_name"]');
        $year_id.val(value);
        $year_name.val(text);
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
        var $month_id = $(this).find('[name="month_id"]');
        var $month_value = $(this).find('[name="month_name"]');
        $month_id.val(value);
        $month_value.val(text);
        $dropdown_month.close();
      }
    });
  }

  // 服务协议弹框
  $("#J_agreement").on('click', function(event) {
    event.stopPropagation();
    var $popup_agreement = $('#J_popup_agreement');
    var popupInstance = $popup_agreement.getInstance();
    popupInstance.show();
  });


}, 'bindcard');
