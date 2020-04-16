import portfolioApi from "@/services/portfolioApi";

export default {
    namespaced: true,
    state: {
        items: []
    },
    actions: {
        fetchServices({ commit }) {
            return portfolioApi.getServices().then(({ results }) => {
                commit("setServices", results);
            });
        }
    },
    getters: {
        total: state => {
            return state.items.length;
        }
    },
    mutations: {
        setServices(state, services) {
            state.items = services;
        }
    }
};
