//引入已经激活的首页的样式表
require("../_stylesheets/bindcard.less");
var validatorLib = require("../../../shared/jquery/components/validate");
require('../../../shared/jquery/components/button');
require("../../../shared/jquery/components/otp");
require("../../../shared/jquery/components/dropdown");
var {
  UI
} = require('../../../shared/jquery/components/core');

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
 * 绑定银行卡页面
 * 入口启动代码放到UI.ready();
 *
 */
UI.ready(function() {
  var $submit = $("＃form");

  var validator = $("#form").validate(validateOptions);

  var otpInstance = $('.plugin-otp').getInstance();

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

  $("#js_selectCheckbox").click(function() {
    if ($("#js_selectCheckbox:checked").length == 1) {
      $("#js_bindcard_submit").removeAttr("disabled");
    } else {
      $("#js_bindcard_submit").attr("disabled", "disabled");
    }
  });
}, 'bindcard');
