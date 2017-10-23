import VueRouter from 'vue-router'
import Vue from 'vue'
Vue.use(VueRouter)
const routes = [
    { path: '/api', redirect: 'assets' }
]
export default new VueRouter({
    routes: routes
})