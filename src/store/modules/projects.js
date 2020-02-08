import portfolioApi from "@/services/portfolioApi";

import { filterFun } from "@/store/utils";

export default {
    namespaced: true,
    state: {
        items: [],
        projectsTotal: 0,
        technologys: []
    },
    actions: {
        fetchProjects({ commit }) {
            return portfolioApi
                .getProjects({
                    fields: "id,title,images,description,technologys"
                })
                .then(data => {
                    commit("setProjects", data.results);
                    commit("setProjectsTotal", data.count);
                });
        },
        fetchTechnologys({ commit }) {
            return portfolioApi.getTechnologys().then(data => {
                commit("setTechnologys", data.results);
            });
        }
    },
    getters: {
        filterItems: ({ items }) => query => {
            return filterFun(items, "technologys", query);
        }
    },
    mutations: {
        setProjects(state, projects) {
            state.items = projects;
        },
        setProjectsTotal(state, total) {
            state.projectsTotal = total;
        },
        setTechnologys(state, technologys) {
            state.technologys = technologys;
        }
    }
};
