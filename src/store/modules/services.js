import portfolioApi from "@/services/portfolioApi";

export default {
    namespaced: true,
    state: {
        items: [],
    },
    actions: {
        fetchServices({ commit, dispatch }) {
            return portfolioApi
                .getServices()
                .then(({ results }) => commit("setServices", results))
                .catch((error) => {
                    const notification = {
                        type: "error",
                        message:
                            "There was a problem fetching Services Info: " +
                            error.message,
                    };
                    dispatch("notifications/add", notification, { root: true });
                });
        },
    },
    getters: {
        total: (state) => state.items.length,
    },
    mutations: {
        setServices(state, services) {
            state.items = services;
        },
    },
};
