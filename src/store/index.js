import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    username:window.localStorage.getItem('username') == null ? '' : JSON.parse(window.localStorage.getItem('username' || '[]')),
  },
  getters: {
    getUser(){
      return store.state.username
    },
  },
  mutations: {
    LOGIN(state,username){
      state.username = username
      window.localStorage.setItem('username',JSON.stringify(username))
    },
    LOGOUT(state){
      state.username =''
      window.localStorage.removeItem('username')
      state.adminMenus = []
    },
  },

})
export default store
