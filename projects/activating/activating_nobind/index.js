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
    accountno: {    
      required: true,
    },
    bankmobile: {
      required: true,
      isMobile: true
    },
    smsvalidcode: {    
      required: true,
    },
    emergencyperson: {    
      required: true,
    },
    emergencymobile: {   
      required: true,
      isMobile: true
    }
    // ,
    // passwordfirtset: {  
    //   required: true,
    //   isBaitiaoPwd: true
    // },
    // passwordconfirmset: {   
    //   required: true,
    //   equalTo:"#password-firtset"
    // }
  },
  // Key/value pairs defining custom messages. Key is the name of an element, value the message to display for that element.
  // Instead of a plain message, another map with specific messages for each rule can be used.
  messages: {
    bankcardtype: {
      required: "请选择银行卡类型",
    },
    publishbankcard: {
      required: "请选择发卡银行",
    },
    accountno: {
      required: "请填正确的银行卡号",
    },
    bankmobile: {
      required: "请填写银行预留手机号",
      isMobile: "请输入正确的手机号码"
    },
    smsvalidcode: {
      required: "请填写短信验证码",
    },
    emergencyperson: {
      required: "请填紧急联系人姓名",
    },
    emergencymobile: {
      required: "请输入正确的手机号码",
    },
    passwordfirtset: {
      required: "请填写密码",
      isBaitiaoPwd: "请输入正确格式的密码"
    },
    passwordconfirmset: {
      required: "请确认密码",
      equalTo: "两次录入的密码不一致,请重新输入"
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

// jQuery.validator.addMethod('isBaitiaoPwd', function(value, element) {
//   var length = value.length;
//   var BaitiaoPwd =  /[A-Za-z].*[0-9]|[0-9].*[A-Za-z]/;  //    /^\d+$/;
//   return (length >=6 && length<=8 && BaitiaoPwd.exec(value)) ? true : false;
// }, "请填写正确白条密码");

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
