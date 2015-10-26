//引入已经激活的首页的样式表
require('../stylesheets/nonactivated/index.less');

var { UI } = require('../../../shared/jquery/components/core');

var Banner = require('../modules/banner');
var RecommendList = require('../modules/recommend-list');
var ActiveSteps = require('../modules/active-steps');

/**
 * 已经激活后的分期首页入口
 * 入口启动代码放到UI.ready();
 *
 */
UI.ready(function () {

  Banner.render();
  RecommendList.render();
  ActiveSteps.render();

});
