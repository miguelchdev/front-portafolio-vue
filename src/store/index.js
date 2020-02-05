import Vue from 'vue'
import Vuex from 'vuex'
import projects from './modules/projects'
import services from './modules/services'
import bio from './modules/bio'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    projects, services,bio
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
