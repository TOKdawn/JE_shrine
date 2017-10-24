import VueRouter from 'vue-router'
import Vue from 'vue'
Vue.use(VueRouter)
const Foo = { template: '<div>foo</div>' }
const routes = [
  { path: '/foo', component: Foo }
]
export default new VueRouter({
    routes: routes
})
