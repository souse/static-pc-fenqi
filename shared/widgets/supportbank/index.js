//引入已经激活的首页的样式表
var $ = require('jquery');
require("./support.bank.less");
require('../../jquery/components/validate/jquery.form')($);
require('../../jquery/components/button');
require("../../jquery/components/otp");
require("../../jquery/components/dropdown");
var validatorLib = require("../../jquery/components/validate");
require("../../jquery/components/tabs");

var popup = require('../../jquery/components/popup');
var dialog = popup.dialog;

var validatorLib = require("../../jquery/components/validate");
var { UI } = require('../../jquery/components/core');



/**
 * 快速激活页面
 * 入口启动代码放到UI.ready();
 *
 */
UI.ready(function() {

  $("#support-bank").on('click', function() {
      var $popup_agreement = $('#popup_supportbank');
      var popupInstance = $popup_agreement.getInstance();
      popupInstance.show();
    });


}, 'supportbank');

