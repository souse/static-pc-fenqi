//引入已经激活的首页的样式表
var $ = require('jquery');
require("../_stylesheets/activating.findpwd.less");
require('../../../shared/jquery/components/validate/jquery.form')($);
require('../../../shared/jquery/components/button');
require("../../../shared/jquery/components/otp");
require("../../../shared/jquery/components/tabs");

require("../../../shared/widgets/supportbank");

var DemoApi  = require('../_services/DemoApi');

var popup = require('../../../shared/jquery/components/popup');
var dialog = popup.dialog;

var validatorLib = require("../../../shared/jquery/components/validate");
var { UI } = require('../../../shared/jquery/components/core');

var $submitbutton;

var validateOptions = $.extend({}, validatorLib.DEFAULTS, {
  rules: {
    //  the name-field mapping, the `mobile` is form field name.
    name: {    
      required: true,
    },
    idno: {   
      required: true,
      idCard: true
    },
    smsvalidcode: {    
      required: true,
    }
    
  },
  // Key/value pairs defining custom messages. Key is the name of an element, value the message to display for that element.
  // Instead of a plain message, another map with specific messages for each rule can be used.
  messages: {
    
    idno: {
      required: "请填写身份证号码",
      idCard: "请输入正确的身份证号码"
    },
    smsvalidcode: {
      required: "请填写短信验证码",
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

/**
 * 快速激活页面
 * 入口启动代码放到UI.ready();
 *
 */
UI.ready(function() {
  var $form = $("#J_act_findpwd");
  $submitbutton = $('#J_act_findpwd_submit');
  var validator = $("#J_act_findpwd").validate(validateOptions);

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

}, 'activating_findpwd');
