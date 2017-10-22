// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import router from './router'
import VueResource from 'vue-resource'
import Scrollactive from 'vue-scrollactive'
// import VueRouter from 'vue-router'
// Vue.use(VueRouter)
Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(Scrollactive)
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    // router,
    template: '<App/>',
    components: { App }
})