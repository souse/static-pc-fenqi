//引入已经激活的首页的样式表
var $ = require('jquery');
require("../_stylesheets/activating.binded.less");
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
    address: {   
      required: true,
      isAddress: true
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


  var $form = $("#J_act_binded");
  $submitbutton = $('#J_act_binded_submit');
  var validator = $("#J_act_binded").validate(validateOptions);


  $("#agreement").on('click', function() {
      var $popup_agreement = $('#popup_agreement');
      var popupInstance = $popup_agreement.getInstance();
      popupInstance.show();
    });

}, 'activating_binded');
