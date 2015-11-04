var router = require('express').Router();
var OtpCtrl = require('./mock/OtpCtrl');

var testCtrl = require('./mock/testCtrl');

// Only 'GET' request.
router.get('/otp', OtpCtrl.index);

// Capture 'GET', 'POST', 'DELETE', 'PUT'
router.use('/otp/list', OtpCtrl.list);

// Only for 'POST' request.
router.post('/otp/sendOtp', OtpCtrl.sendOtp);

router.get('/xg',testCtrl.index);

router.post('/xg',testCtrl.index);

module.exports = router;
