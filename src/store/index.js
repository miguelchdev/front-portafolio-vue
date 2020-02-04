import Vue from 'vue'
import Vuex from 'vuex'
import projects from './modules/projects'
import services from './modules/services'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    projects, services
  },
  state: {

  },
  actions: {

  },
  getters: {

  },
  mutations: {

  }
})
