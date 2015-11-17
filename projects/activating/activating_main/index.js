//引入已经激活的首页的样式表
var $ = require('jquery');
require("../_stylesheets/activating.main.less");
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
    realName: {    
      required: true,
    },
    identityNo: {   
      required: true,
      idCard: true
    },
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
    realName: {
      required: "请填写真实姓名",
    },
    identityNo: {
      required: "请填写身份证号码",
      isMobile: "请输入正确的手机号码"
    },
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
  var $form = $("#J_act_main");
  $submitbutton = $('#J_act_main_submit');
  var validator = $("#J_act_main").validate(validateOptions);

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


//ajax请求  
var demoApi = new DemoApi();

$("#J_act_main_submit").on('click', function(e){

  //成功：跳转到支付密码页面
  //  demoApi.fetchTestData()
  //  .then(function (result) {
  //    console.log('result: ', result);
  //    //跳转页面由后台生成，后续修改
  //    //window.location.href ="http://localhost:8080/thymeleaf/activating_setpassword";
  //  })
  //  .fail(function (err) {
  //   console.log('err: ', err);
  //  })
  // //window.location.href ="http://localhost:8080/thymeleaf/activating_setpassword";
  // e.preventDefault();
  // return false;

        //绑定AJAX提交
        $.ajax({
                 //url: "http://localhost:5000/api/test",
                 //url: "http://localhost:8080/thymeleaf/activating_setpassword",
                 url: "/activating/full",
                 data:$("#J_act_main").serialize(),
                 type:"post",
                 dataType:"JSON",
                 success:function(data){//ajax返回的数据
                  alert("data========="+data);
                  console.log("data========="+data);
                    if(data.code=='0000'){
                      alert("data:code========="+data.code);
                      alert("data:message========="+data.messages);
                      alert("data:url========="+data.url);
                      alert("http://10.8.171.20:8080"+data.url);
                      window.location.href = "http://10.8.171.20:8080"+data.url;
                    }else{
                      alert(data.messages);
                    }
                 },
                 error: function(){
                  alert("请求发生错误");
                 }
            });



});


}, 'activating_main');
