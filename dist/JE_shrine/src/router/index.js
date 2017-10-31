'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _App = require('../App.vue');

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [{
    path: '/',
    component: _App2.default,
    children: [{
        path: '',
        component: function component(r) {
            return require.ensure([], function () {
                return r(require('../components/home/home.vue'));
            }, 'home');
        }
        //   {
        //     path: 'login',
        //     component: r => require.ensure([], () => r(require('../components/log/login.Vue')), 'login')
        // }, {
        //     path: 'registered',
        //     component: r => require.ensure([], () => r(require('../components/log/registered.Vue')), 'registered')
        // }
    }]
}];
//# sourceMappingURL=index.js.map