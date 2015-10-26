var $ = require('jquery');
var RecommendList = {

  /**
   * 每个模块的入口给最外层启动代码
   * @return void
   */
  render: function () {
    $('body').append($('<div>recommend list</div>'));
  }
};
module.exports = RecommendList;

