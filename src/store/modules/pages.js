import portfolioApi from "@/services/portfolioApi";

export default {
    namespaced: true,
    state: {
        services: null,
        introduction: { images: {} },
        contact: null,
        projects: null,
    },
    actions: {
        fetchPages({ commit, dispatch }) {
            dispatch("addAction", "fetchContent", { root: true });
            return portfolioApi
                .getPages()
                .then(
                    ({
                        results: { services, contact, introduction, projects },
                    }) => {
                        commit("setServices", services);
                        commit("setContact", contact);
                        commit("setIntroduction", introduction);
                        commit("setProjects", projects);
                    }
                )
                .catch((error) => {
                    const notification = {
                        type: "error",
                        message:
                            "There was a problem fetching info: " +
                            error.message,
                    };
                    dispatch("notifications/add", notification, { root: true });
                })
                .then(() => {
                    dispatch("removeAction", "fetchContent", { root: true });
                });
        },
    },
    getters: {},
    mutations: {
        setServices(state, services) {
            state.services = services;
        },
        setContact(state, contact) {
            state.contact = contact;
        },
        setIntroduction(state, introduction) {
            state.introduction = introduction;
        },
        setProjects(state, projects) {
            state.projects = projects;
        },
    },
};
