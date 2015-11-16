var Mock = require('mockjs');
var debug = require('debug')('app:testCtrl');
var testCtrl = {
  index: function (req, res, next) {
     res.send({
        code: '0000',
        messages:'处理成功'
      });
  },
  list: function (req, res, next) {
    console.log("XG");
    res.send({
        status: '01',
        error:'02'
      });
    res.send();
  },
  sendOtp: function (req, res, next) {
    res.send({
      code: '000000'
    });
  }
};

module.exports = testCtrl;