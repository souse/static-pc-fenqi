//引入已经激活的首页的样式表,此页面应该只有 样式不需要JS
require('../_stylesheets/introduction.less');
var popup = require('../../../shared/jquery/components/popup');
require("../../../shared/jquery/components/otp");
var validatorLib = require("../../../shared/jquery/components/validate");
var dialog = popup.dialog;
var {
  UI
} = require('../../../shared/jquery/components/core');


UI.ready(function() {
  // var otpInstance = $('.alert-open').getInstance();
  // console.log(optInstance);
  // otpInstance.setOptions({
  //   onOpen: false,
  //   onClose: false,
  //   onActionClicked: false,
  //   autoClose: false,
  //   modal: true,
  //   modalClose: false,
  //   classes: "",
  //   header: {
  //     showClose: true,
  //     html: "Your Header"
  //   },
  //   body: "Your dialog body",
  //   footer: {
  //     html: '<button class="btn btn-primary btn-sm btn-popup" data-trigger="ok">确定</button>'
  //   }
  /**
    $("#button").on('click', function() {

      dialog.alert({
        header: {
          showClose: true,
          html: "Your Header11111"
        },
        body: "Your dialog body111111",
        // if equals false, don't show footer.
        footer: {
          html: '<button class="btn btn-primary btn-sm btn-popup" data-trigger="ok">确定</button>'
        },
        onOpen: function() {

        },
        onClose: function() {

        },
        onActionClicked: function($btn) {
          console.log($btn)
            // clicked close dialog.
          this.close();
        }
      });


    });
  **/
  var $form = $("#J_seccode");
  var J_seccode_submit = $("#J_seccode_submit");
  var J_seccode = $("#J_seccode").val();
  $("#J_seccode_submit").on('click', function() {
    if (J_seccode != undefined && J_seccode.length > 0) {
      return true;
    } else {
      $("#J_seccode").css('border','1px solid red');
      return false;
    }
  });

  $("#button").on('click', function() {
    var $popup = $('#popup');
    var popupInstance = $popup.getInstance();
    popupInstance.show();
  });
  $("#button2").on('click', function() {
    var $popup = $('#popup2');
    var popupInstance = $popup.getInstance();
    popupInstance.show();
  });
});
