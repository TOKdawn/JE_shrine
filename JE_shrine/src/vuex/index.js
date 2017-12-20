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
    login(state, userData) {
        state.userdata.role = userData.role
        state.userdata.username = userData.name
    },
    logout(state) {
        state.userdata.role = 0
    }
}
export default new Vuex.Store({
    state,
    mutations
})