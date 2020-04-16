import portfolioApi from "@/services/portfolioApi";

import { filterFun } from "@/store/utils";

export default {
    namespaced: true,
    state: {
        items: [],
        technologys: [],
        page: 1,
        count: 0
    },
    actions: {
        fetchProjects({ commit, state, getters }) {
            return portfolioApi
                .getProjects({
                    fields: "id,title,images,description,technologys",
                    page: state.page
                })
                .then(({ results, next, count }) => {
                    commit("setCount", count);
                    if (state.count > getters.total)
                        commit("setProjects", results);
                    if (next) commit("setNextPage");
                });
        },
        fetchTechnologys({ commit }) {
            return portfolioApi.getTechnologys().then(({ results }) => {
                commit("setTechnologys", results);
            });
        }
    },
    getters: {
        filterItems: ({ items }) => query => {
            return filterFun(items, "technologys", query);
        },
        total: state => {
            return state.items.length;
        }
    },
    mutations: {
        setProjects(state, projects) {
            state.items.push(...projects);
        },
        setProjectsTotal(state, total) {
            state.projectsTotal = total;
        },
        setTechnologys(state, technologys) {
            state.technologys = technologys;
        },
        setNextPage(state) {
            state.page++;
        },
        setCount(state, number) {
            state.count = number;
        }
    }
};
