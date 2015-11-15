function bindPopupDetailCheckbox($popup) {
  /**
   *  复选框操作
    1.tr.class=J_disable，表示当前分期已还款，复选框不能操作
    2.tr.class=overdue，表示当前期数已逾期
   * @return {[type]}
   */
  $popup.on('click', '.J_order_checkbox', function(e) {
    var temp = true;
    var $parent = $(this).parents("tr");
    // J_disable，表示当前分期已还款，复选框不能操作
    if ($parent.hasClass("J_disable")) {
      return false;
    }
    /********** 还款需从当前账期开始连续选择 ***************/
    // 1.选中当前节点
    var $prevAlltr = $parent.prevAll("tr");
    if ($prevAlltr.length > 0) {
      $.each($prevAlltr, function(index) {
        if (!$(this).hasClass("J_disable")) {
          if ($(this).find(".active").length == 0) {
            temp = false;
            return false;
          }
        }

      });
    }
    if (temp) {
      // 2.取消选中当前节点
      var $nextAlltr = $parent.nextAll("tr");
      if ($nextAlltr.length > 0) {
        $.each($nextAlltr, function(index) {
          if (!$(this).hasClass("J_disable")) {
            if ($(this).find(".active").length > 0) {
              temp = false;
              return false;
            }
          }

        });
      }
    }
    if (!temp) {
      $("#J_subhd").html("还款需从当前账期开始连续选择").css("color", "red");
      return false;
    } else {
      $("#J_subhd").html("标红的期数表示您逾期未付款，一定要先还逾期的哦").css("color", "#888585");
    }
    // ********* END **************

    /********** 根据选择复选框，对选中的数据进行统计 ***************/
    var pay_fee = $parent.find(".J_pay_fee").text();
    var process_fee = $parent.find(".J_process_fee").text();
    var overdue_fee = $parent.find(".J_overdue_fee").text();
    // 分别获取本金、手续费、滞纳金、付款总金额
    var $order_detail = $("#order_detail");
    var $J_principal = $("#J_principal", $order_detail);
    var $J_process = $("#J_process", $order_detail);
    var $J_overdue = $("#J_overdue", $order_detail);
    var $J_pay_total = $("#J_pay_total", $order_detail);

    if ($(this).hasClass("active")) {
      $J_process.text(parseInt($J_process.text()) - parseInt(process_fee));
      $J_overdue.text(parseInt($J_overdue.text()) - parseInt(overdue_fee));
      $J_pay_total.text(parseInt($J_pay_total.text()) - parseInt(pay_fee));
    } else {
      $J_process.text(parseInt($J_process.text()) + parseInt(process_fee));
      $J_overdue.text(parseInt($J_overdue.text()) + parseInt(overdue_fee));
      $J_pay_total.text(parseInt($J_pay_total.text()) + parseInt(pay_fee));
    }
    $("#J_consume_money").text($J_pay_total.text());
    /********** END ***************/

  });
}
module.exports = {
  // 绑定账单 ‘全部’ TAB
  bindPayPopup: function() {
    $('#J_all_tab').on('click', '.J_pay_order', function(e) {
      var $popup = $('#order_detail');
      //$popup.find(".J_order_checkbox").removeClass("active");
      var popupInstance = $popup.getInstance();
      //add by yj：将all.html中的内容clone到popup页面
      var $this = $(this);
      var $nextTableDetail = $this.parents('.tabs-item2-opera').next('.children_item').find(".J_fenqi_data");
      var $popupTablelist = $('.order-pay-list', popupInstance.$element);

      $popupTablelist.html($nextTableDetail.html());

      $.ui.run('ui.button');
      //将弹出框的隐藏字段显示，将状态隐藏
      $popupTablelist.find(".nosee").removeClass("nosee");
      $popupTablelist.find(".cansee").removeClass("cansee").addClass("nosee");
      // 去除已付款的分期
      $popupTablelist.find(".fenqi-already-pay").remove();
      popupInstance.show();

      bindPopupDetailCheckbox($popup);

    });
  }
}
