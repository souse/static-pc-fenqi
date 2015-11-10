//引入已经激活的首页的样式表
var $ = require('jquery');
require("../_stylesheets/activating.succ.less");
require('../../../shared/jquery/components/validate/jquery.form')($);
require('../../../shared/jquery/components/button');
require("../../../shared/jquery/components/otp");
require("../../../shared/jquery/components/tabs");
var popup = require('../../../shared/jquery/components/popup');
var dialog = popup.dialog;

var validatorLib = require("../../../shared/jquery/components/validate");
var { UI } = require('../../../shared/jquery/components/core');

var $submitbutton;
//var validateOptions = {
var validateOptions = $.extend({}, validatorLib.DEFAULTS, {
  rules: {
    //  the name-field mapping, the `mobile` is form field name.
    passwordfirtset: {  
      required: true,
      isBaitiaoPwd: true
    },
    passwordconfirmset: {   
      required: true,
      equalTo:"#passwordfirtset"
    }
  },
  // Key/value pairs defining custom messages. Key is the name of an element, value the message to display for that element.
  // Instead of a plain message, another map with specific messages for each rule can be used.
  messages: {
    passwordfirtset: {
      required: "请填写密码",
      isBaitiaoPwd: "请输入正确格式的密码"
    },
    passwordconfirmset: {
      required: "请确认密码",
      equalTo: "两次录入的密码不一致"
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

jQuery.validator.addMethod('isBaitiaoPwd', function(value, element) {
  var length = value.length;
  var BaitiaoPwd = /^[A-Za-z0-9]+$/;   //    /[A-Za-z].*[0-9]|[0-9].*[A-Za-z]/;  //    /^\d+$/;
  return (length ==6 && BaitiaoPwd.exec(value)) ? true : false;
}, "请填写正确白条密码");

/**
 * 快速激活页面
 * 入口启动代码放到UI.ready();
 *
 */
UI.ready(function() {

  var $form = $("#J_act_succ");
  $submitbutton = $('#J_act_succ_submit');
  var validator = $("#J_act_succ").validate(validateOptions);

    $("#agreement").on('click', function() {
      var $popup_agreement = $('#popup_agreement');
      var popupInstance = $popup_agreement.getInstance();
      popupInstance.show();
    });



}, 'activating_succ');
