//引入已经激活的首页的样式表
var $ = require('jquery');
require("../_stylesheets/activating.nobind.less");
require('../../../shared/jquery/components/validate/jquery.form')($);
require('../../../shared/jquery/components/button');
require("../../../shared/jquery/components/otp");
require("../../../shared/jquery/components/tabs");
require("../../../shared/widgets/supportbank");

var popup = require('../../../shared/jquery/components/popup');
var dialog = popup.dialog;

var validatorLib = require("../../../shared/jquery/components/validate");
var { UI } = require('../../../shared/jquery/components/core');

var $submitbutton;
//var validateOptions = {
var validateOptions = $.extend({}, validatorLib.DEFAULTS, {
  rules: {
    //  the name-field mapping, the `mobile` is form field name.
    address: {   
      required: true,
      isAddress: true
    },
    cardNo: {    
      required: true,
    },
    phone: {
      required: true,
      isMobile: true
    },
    validateCode: {    
      required: true,
    },
    emergencyContact: {    
      required: true,
    },
    emergencyPhone: {   
      required: true,
      isMobile: true
    }
  },
  // Key/value pairs defining custom messages. Key is the name of an element, value the message to display for that element.
  // Instead of a plain message, another map with specific messages for each rule can be used.
  messages: {
    address: {
      required: "请填写联系地址",
      isAddress: "请填写至少10个字"
    },
    bankcardtype: {
      required: "请选择银行卡类型",
    },
    publishbankcard: {
      required: "请选择发卡银行",
    },
    cardNo: {
      required: "请填正确的银行卡号",
    },
    phone: {
      required: "请填写银行预留手机号",
      isMobile: "请输入正确的手机号码"
    },
    validateCode: {
      required: "请填写短信验证码",
    },
    emergencyContact: {
      required: "请填紧急联系人姓名",
    },
    emergencyPhone: {
      required: "请输入正确的手机号码",
    }
  },
  submitHandler: function(form) {
    $(form).ajaxSubmit({
      // pre-submit callback
      beforeSubmit: function() {
        $submit.button('loading');
        console.log('pre-submit callback');
      },
      // post-submit callback
      success: function() {
        console.log('post-submit callback');
        $submit.button('reset');
      }
    });
  }
});

jQuery.validator.addMethod('isAddress', function(value, element) {
  var length = value.length;
  return (length >=10) ? true : false;
}, "isAddress");

/**
 * 快速激活页面
 * 入口启动代码放到UI.ready();
 *
 */
UI.ready(function() {
  //var $submit = $("＃form");

  //var validator = $("#form").validate(validateOptions);


  var $form = $("#J_act_nobind");
  $submitbutton = $('#J_act_nobind_submit');
  var validator = $("#J_act_nobind").validate(validateOptions);

  //短信
  var otpInstance = $('.plugin-otp', $form).getInstance();
  otpInstance.setOptions({
    otpService: {
      apiRoot: "http://localhost:4002/api/",
      trySendOTPApi: "xg"
    },
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

  $("#agreement").on('click', function() {
      var $popup_agreement = $('#popup_agreement');
      var popupInstance = $popup_agreement.getInstance();
      popupInstance.show();
    });

  // $("#support-bank").on('click', function() {
  //     var $popup_agreement = $('#popup_supportbank');
  //     var popupInstance = $popup_agreement.getInstance();
  //     popupInstance.show();
  //   });

}, 'activating_nobind');
