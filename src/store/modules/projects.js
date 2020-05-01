import portfolioApi from "@/services/portfolioApi";

import { filterFun, onlyUnique } from "@/store/utils";

export default {
    namespaced: true,
    state: {
        items: [],
        project: {},
        page: 1,
        count: 0,
    },
    actions: {
        fetchProjects({ commit, state, getters }) {
            return portfolioApi
                .getProjects({
                    fields: "id,title,images,description,technologys",
                    page: state.page,
                })
                .then(({ results, next, count }) => {
                    commit("setCount", count);
                    if (state.count > getters.total)
                        commit("setProjects", results);
                    if (next) commit("setNextPage");
                });
        },
        fetchProject({ commit, getters }, id) {
            let project = getters.getProjectById(id);

            if (project) {
                commit("setProject", project);
                return project;
            } else {
                return portfolioApi.getProject(id).then((project) => {
                    commit("setProject", project);
                    return project;
                });
            }
        },
    },
    getters: {
        filterItems: ({ items }) => (query) => {
            return filterFun(items, "technologys", query);
        },
        total: ({ items }) => {
            return items.length;
        },
        getProjectById: ({ items }) => (id) => {
            return items.find((project) => project.id === id);
        },
        technologys: ({ items }) => {
            return items
                .flatMap((project) => {
                    return project.technologys;
                })
                .filter(onlyUnique);
        },
    },
    mutations: {
        setProjects(state, projects) {
            state.items.push(...projects);
        },
        setProject(state, project) {
            state.project = project;
        },
        setNextPage(state) {
            state.page++;
        },
        setCount(state, number) {
            state.count = number;
        },
    },
};
