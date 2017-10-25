import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
  userdata: 'text'
}
const mutations = {
    increment (state) {

    }
}
export default new Vuex.Store({
  state,
  mutations
})
