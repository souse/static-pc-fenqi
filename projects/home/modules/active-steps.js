var $ = require('jquery');
var ActiveSteps = {
  /**
   * 每个模块的入口给最外层启动代码
   * @return void
   */
  render: function () {
    $('body').append($('<div>ActiveSteps</div>'));
  }
};
module.exports = ActiveSteps;
