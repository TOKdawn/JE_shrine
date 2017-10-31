'use strict';

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _router = require('./router');

var _router2 = _interopRequireDefault(_router);

var _vuex = require('vuex');

var _vuex2 = _interopRequireDefault(_vuex);

var _vueScrollactive = require('vue-scrollactive');

var _vueScrollactive2 = _interopRequireDefault(_vueScrollactive);

var _vueRouter = require('vue-router');

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _vuex3 = require('./vuex/');

var _vuex4 = _interopRequireDefault(_vuex3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
_vue2.default.config.productionTip = false;
_vue2.default.use(_vuex2.default);

_vue2.default.use(_vueScrollactive2.default);
_vue2.default.use(_vueRouter2.default);
var router = new _vueRouter2.default({
  routes: _router2.default
});
/* eslint-disable no-new */
new _vue2.default({
  router: router, // router这个名字不能改
  store: _vuex4.default
}).$mount('#app');
//# sourceMappingURL=main.js.map