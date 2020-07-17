import portfolioApi from "@/services/portfolioApi";

export default {
    namespaced: true,
    state: {
        items: null,
    },
    actions: {
        async fetchServices({ commit, dispatch }) {
            dispatch("addAction", "fetchServices", { root: true });

            const { results, error } = await portfolioApi.getServices();
            if (!error) {
                commit("setServices", results);
            } else {
                const notification = {
                    type: "error",
                    message:
                        "There was a problem fetching Services Info: " +
                        error.message,
                };
                dispatch("notifications/add", notification, { root: true });
            }
            dispatch("removeAction", "fetchServices", { root: true });
        },
    },
    getters: {
        total: (state) => state.items.length,
        ready({ items }, getters, rootState, { isLoading }) {
            return items && !isLoading("fetchServices");
        },
    },
    mutations: {
        setServices(state, services) {
            state.items = services;
        },
    },
};
