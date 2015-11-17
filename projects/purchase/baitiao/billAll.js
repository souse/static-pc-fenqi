import template from '../../../shared/jquery/utils/template';

var amountInfo = {
  issue: 0,
  principal: 0,
  process: 0,
  overdue: 0,
  payTotal: 0
};

function calcuMoneyDetail($amountInfo) {
  var tpl =
    '<span class="footer-subtitle">' +
    ' （您选择了&nbsp;<span id="J_issue"><%=issue%></span>期，本金：¥<span id="J_principal"><%=principal%></span>' +
    '  手续费：¥<span id="J_process"><%=process%></span>' +
    '  违约金：<span class="last">¥<span id="J_overdue" class=""><%=overdue%></span></span>）' +
    '</span>' +
    '<span class="pay-result">您的付款总金额：<span>¥<span id="J_pay_total"><%=payTotal%></span></span></span>';

  if ($amountInfo == undefined || $amountInfo == null) {
    amountInfo = {
      issue: 0,
      principal: 0,
      process: 0,
      overdue: 0,
      payTotal: 0
    }
  }

  return template(tpl, $amountInfo || amountInfo);
}

function bindPopupDetailCheckbox($popup) {
  /**
   *  复选框操作
    1.tr.class=J_disable，表示当前分期已还款，复选框不能操作
    2.tr.class=overdue，表示当前期数已逾期
   * @return {[type]}
   */
  $popup.off('click');
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
    var pay_fee = parseFloat($parent.find(".J_pay_fee").text());
    var process_fee = parseFloat($parent.find(".J_process_fee").text());
    var overdue_fee = parseFloat($parent.find(".J_overdue_fee").text());
    // 分别获取本金、手续费、滞纳金、付款总金额
    if ($(this).hasClass("active")) {
      amountInfo.issue--;
      // 本金
      amountInfo.principal = parseFloat((amountInfo.principal - (pay_fee - process_fee - overdue_fee)).toFixed(2));
      // 手续费
      amountInfo.process = parseFloat((amountInfo.process - process_fee).toFixed(2));
      // 滞纳金
      amountInfo.overdue = parseFloat((amountInfo.overdue - overdue_fee).toFixed(2));
      // 总金额
      amountInfo.payTotal = parseFloat((amountInfo.payTotal - pay_fee).toFixed(2));
    } else {
      amountInfo.issue++;
      // 本金
      amountInfo.principal = parseFloat((amountInfo.principal + (pay_fee - process_fee - overdue_fee)).toFixed(2));
      // 手续费
      amountInfo.process = parseFloat((amountInfo.process + process_fee).toFixed(2));
      // 滞纳金
      amountInfo.overdue = parseFloat((amountInfo.overdue + overdue_fee).toFixed(2));
      // 总金额
      amountInfo.payTotal = parseFloat((amountInfo.payTotal + pay_fee).toFixed(2));
    }

    $("#order_detail").find(".order-pay-footer").html(calcuMoneyDetail(amountInfo));

    $("#J_consume_money").text(amountInfo.payTotal);
    /********** END ***************/
  });

  $popup.on('click','#pay_submit',function(){
    // 判断是否选择分期
    var len = $(".order-pay-list").find(".active").length;
    if(len ==0){
      $("#J_subhd").html("请选择还款月份").css("color", "red");
      return false;
    }
    $("#waitPayPopForm").attr("action","/repayment/repay");
    $("#waitPayPopForm").submit();

  });


}
module.exports = {
  // 绑定账单 ‘全部’ TAB
  bindPayPopup: function() {
    $('#J_all_tab').off('click', '.J_pay_order').on('click', '.J_pay_order', function(e) {
      //
      var $children = $(this).parents(".tabs-item2-opera").find(".tabs-item2-opera-child");
      // 跳转违约支付页面
      if ($children.length == 0) {
        $("#order_form").attr("action", "/repayment/refund");
        $("#order_form").submit();
      } else {
        var $popup = $('#order_detail');
        //$popup.find(".J_order_checkbox").removeClass("active");
        var popupInstance = $popup.getInstance();

        //add by yj：将all.html中的内容clone到popup页面
        var $this = $(this);
        var $nextTableDetail = $this.parents('.tabs-item2-opera').next('.children_item').find(".J_fenqi_data");
        var $popupTablelist = $('.order-pay-list', popupInstance.$element);
        // 订单号/订单名称
        $('.order-name', popupInstance.$element).text($(this).siblings("[name='orderName']").val());
        $('.order-no', popupInstance.$element).text($(this).siblings("[name='orderNo']").val());
        $("#orderNo", popupInstance.$element).val($(this).siblings("[name='orderNo']").val());

        $popupTablelist.html($nextTableDetail.html());

        //将弹出框的隐藏字段显示，将状态隐藏
        $popupTablelist.find(".nosee").removeClass("nosee");
        $popupTablelist.find(".cansee").removeClass("cansee").addClass("nosee");
        // 去除已付款的分期
        $popupTablelist.find(".fenqi-already-pay").remove();
        popupInstance.show();
        $.ui.run('ui.button');

        // reset
        popupInstance.$element.find('.order-pay-footer').html(calcuMoneyDetail());

        bindPopupDetailCheckbox(popupInstance.$element);
      }


    });



  }
}
