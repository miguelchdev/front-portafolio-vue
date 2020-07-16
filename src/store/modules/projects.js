import portfolioApi from "@/services/portfolioApi";

import { filterFun, onlyUnique } from "@/helpers";

export default {
    namespaced: true,
    state: {
        items: [],
        project: {},
        page: 1,
        count: 0,
    },
    actions: {
        async fetchProjects({ commit, state, getters, dispatch }) {
            dispatch("addAction", "fetchProjects", { root: true });

            try {
                const {
                    results,
                    next,
                    count,
                } = await portfolioApi.getProjects({ page: state.page });

                commit("setCount", count);

                if (state.count > getters.total) commit("setProjects", results);

                if (next) commit("setNextPage");
            } catch (error) {
                const notification = {
                    type: "error",
                    message:
                        "There was a problem fetching projects: " +
                        error.message,
                };
                dispatch("notifications/add", notification, { root: true });
            }

            dispatch("removeAction", "fetchProjects", { root: true });
        },
        async fetchProject({ commit, getters, dispatch }, id) {
            let project = getters.getProjectById(id);

            if (project) {
                commit("setProject", project);
                return project;
            } else {
                dispatch("addAction", "fetchProject", { root: true });
                try {
                    project = await portfolioApi.getProject(id);
                    commit("setProject", project);
                } catch ({ message }) {
                    
                }

                dispatch("removeAction", "fetchProject", { root: true });
                return project;
            }
        },
    },
    getters: {
        filterItems: ({ items }) => (query) =>
            filterFun(items, "technologys", query),
        total: ({ items }) => items.length,
        getProjectById: ({ items }) => (id) =>
            items.find((project) => project.id === id),
        technologys: ({ items }) =>
            items.flatMap((project) => project.technologys).filter(onlyUnique),
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
