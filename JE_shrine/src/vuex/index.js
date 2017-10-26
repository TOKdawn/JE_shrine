import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
/* eslint-disable no-new */
const state = {
  userdata: {
    '_id': {
      '$oid': ''
    },
    'email': '',
    'passwordHash': '',
    'role': 0,
    'username': ''
  }
}
const mutations = {
    increment (state) {

    }
}
export default new Vuex.Store({
  state,
  mutations
})
