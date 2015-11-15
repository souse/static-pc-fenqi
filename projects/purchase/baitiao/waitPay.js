//绑定账单 ‘待付款’ TAB
module.exports =  {
  // 加载 白条-待付款 数据
  waitPayLoad:function(quest){
    $('#J_waitPay').on('click', function() {
      //alert("sdsds");
      if ($("#J_waitPay_tab").find(".biaotiao-waitPay").length == 0) {
        $("#J_waitPay_tab").load(quest + "/waitPay?currentPage=1&pageSize=10", function(data) {
          UI.run('ui.pagination');
        });
      }
    });
  }

}
