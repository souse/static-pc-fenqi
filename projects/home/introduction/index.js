//引入已经激活的首页的样式表,此页面应该只有 样式不需要JS
require('../_stylesheets/introduction.less');
require('../../../shared/jquery/components/popup');
var {
  UI
} = require('../../../shared/jquery/components/core');


UI.ready(function() {
  var otpInstance = $('.alert-open').getInstance();
  console.log(optInstance);
  otpInstance.setOptions({
    onOpen: false,
    onClose: false,
    onActionClicked: false,
    autoClose: false,
    modal: true,
    modalClose: false,
    classes: "",
    header: {
      showClose: true,
      html: "Your Header"
    },
    body: "Your dialog body",
    footer: {
      html: '<button class="btn btn-primary btn-sm btn-popup" data-trigger="ok">确定</button>'
    }
  });


  $("#button").on('click', '.alert-open', function() {
    dialog.alert({
      onOpen: function() {
        $result.find('.output').html('on open..');
      },
      onClose: function() {
        $result.find('.output').html('on close..');
      },
      onActionClicked: function($btn) {
        $result.find('.output').html($btn.data('trigger'));
        // clicked close dialog.
        this.close();
      }
    });
  });



});
