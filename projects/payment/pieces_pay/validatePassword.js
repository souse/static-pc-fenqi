// 密码验证
module.exports = {
  // 支付密码验证

  validatePayPassworld: function（value） {
    if(value == undefined){
      return false;
    }
    var length = value.length;
    var BaitiaoPwd = /^\d{6}$/;
    if (!BaitiaoPwd.exec(value)) {
      return false;
    }

    if (length != 6) {
      return false;

    }
    var pwd = new Array();
    var tempValue = value + "";
    pwd[0] = parseInt(tempValue.substring(0, 1));
    pwd[1] = parseInt(tempValue.substring(1, 2));
    pwd[2] = parseInt(tempValue.substring(2, 3));
    pwd[3] = parseInt(tempValue.substring(3, 4));
    pwd[4] = parseInt(tempValue.substring(4, 5));
    pwd[5] = parseInt(tempValue.substring(5, 6));

    if (pwd[0] == pwd[1] - 1 && pwd[1] == pwd[2] - 1 && pwd[2] == pwd[3] - 1 && pwd[3] == pwd[4] - 1 && pwd[4] == pwd[5] - 1) {
      return false;
    };

    if (pwd[0] == pwd[1] + 1 && pwd[1] == pwd[2] + 1 && pwd[2] == pwd[3] + 1 && pwd[3] == pwd[4] + 1 && pwd[4] == pwd[5] + 1) {
      return false;
    };

    if (pwd[0] == pwd[1] && pwd[1] == pwd[2] && pwd[2] == pwd[3] && pwd[3] == pwd[4] && pwd[4] == pwd[5]) {
      return false;
    };

    return true;
  }

};
