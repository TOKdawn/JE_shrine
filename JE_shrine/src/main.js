// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import routes from './router'
import Vuex from 'vuex'
import Scrollactive from 'vue-scrollactive'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import iView from 'iview'
import axios from 'axios'
import 'iview/dist/styles/iview.css'
import 'element-ui/lib/theme-chalk/index.css'
import 'sass/element-variables.sass'
import 'fonts/iconfont.css'
import store from './vuex/'
Vue.config.productionTip = false
Vue.prototype.$ajax = axios
Vue.use(Vuex)
Vue.use(ElementUI)
Vue.use(Scrollactive)
Vue.use(VueRouter)
Vue.use(iView)
const router = new VueRouter({
        routes
    })
    /* eslint-disable no-new */
new Vue({
    router, // router这个名字不能改
    store
    // render: h => h(App)
}).$mount('#app')