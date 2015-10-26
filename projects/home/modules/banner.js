var $ = require('jquery');
var Banner = {
  /**
   * 每个模块的入口给最外层启动代码
   * @return void
   */
  render: function () {
    $('body').append($('<div>activated banner</div>'));
  }
};
module.exports = Banner;
