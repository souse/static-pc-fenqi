//引入已经激活的首页的样式表
require('../_stylesheets/index.less');

var { UI } = require('../../../shared/jquery/components/core');

var Banner = require('../_modules/banner');
var RecommendList = require('../_modules/recommend.list');
var ActiveSteps = require('../_modules/brief');

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
