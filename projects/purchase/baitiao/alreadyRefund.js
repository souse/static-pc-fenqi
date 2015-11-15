//绑定账单 ‘已退款’ TAB
module.exports = {
  alreadyRefundLoad: function(quest) {
    $("#J_alreadyRefund").on('click', function() {
      if ($("#J_alreadyRefund_tab").find(".biaotiao-alreadyRefund").length == 0) {
        $("#J_alreadyRefund_tab").load(quest + "/alreadyRefund?currentPage=1&pageSize=10", function(data) {
          UI.run('ui.pagination');
        });
      }

    });
  }
}
