var Mock = require('mockjs');
var debug = require('debug')('app:testCtrl');
var testCtrl = {
  index: function (req, res, next) {
    setTimeout(function () {
      res.send({
        success: 'welcome to node mock !'
      });
    }, 2000);
  },
  list: function (req, res, next) {
    console.log("XG");

    res.send();
  },
  sendOtp: function (req, res, next) {
    res.send({
      code: '000000'
    });
  }
};

module.exports = testCtrl;
