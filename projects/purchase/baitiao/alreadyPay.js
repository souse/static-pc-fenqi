//绑定账单 ‘已支付’ TAB


module.exports = {
  alreadyPayLoad : function(quest) {
      $("#J_alreadyPay").on('click', function() {
        if ($("#J_alreadyPay_tab").find(".biaotiao-alreadyPay").length == 0) {
          $("#J_alreadyPay_tab").load(quest + "/alreadyPay?currentPage=1&pageSize=10", function(data) {
            UI.run('ui.pagination');
          });
        }

      });
    },
    // 已支付订单详情弹出框
  repaymentDetail: function() {
    $(".J_repayment_detail").on('click', function() {
      var $popup = $('#repayment_detail');
      var popupInstance = $popup.getInstance();
      popupInstance.show();
    });
  }


};
