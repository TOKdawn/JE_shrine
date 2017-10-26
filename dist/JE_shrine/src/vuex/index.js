'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _vuex = require('vuex');

var _vuex2 = _interopRequireDefault(_vuex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vuex2.default);
/* eslint-disable no-new */
var state = {
  userdata: {
    '_id': {
      '$oid': ''
    },
    'email': '',
    'passwordHash': '',
    'role': 0,
    'username': ''
  }
};
var mutations = {
  increment: function increment(state) {}
};
exports.default = new _vuex2.default.Store({
  state: state,
  mutations: mutations
});
//# sourceMappingURL=index.js.map