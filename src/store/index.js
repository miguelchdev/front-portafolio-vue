import Vue from 'vue'
import Vuex from 'vuex'
import portfolioApi from "@/services/portfolioApi";
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    projects: [],
    projectsTotal: 0,
    projectsTechnologys: []
  },
  actions: {
    fetchProjects({ commit }) {
      portfolioApi
        .getProjects({
          fields: "id,title,images,description,technologys"
        }).then(data => {
          commit("setProjects", data.results);
          commit("setProjectsTotal", data.count);
        })
    }, fetchProjectsTechnologys({ commit }) {
      portfolioApi
        .getTechnologys()
        .then(data => {
          commit('setProjectsTechnologys', data.results)
        })
    }

  },
  getters: {
    portfolioProjects: (state) => (query) => {
      return state.projects.filter(project => !state.projectsTechnologys.includes(query) ? true : project["technologys"].includes(query))
    }, portfolioProjectsTotal(state) {
      return state.projectsTotal
    },

  },
  mutations: {
    setProjects(state, projects) {
      state.projects = projects
    }, setProjectsTotal(state, total) {
      state.projectsTotal = total
    },
    setProjectsTechnologys(state, technologys) {
      state.projectsTechnologys = technologys
    }
  }
})
