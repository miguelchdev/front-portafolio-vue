import portfolioApi from "@/services/portfolioApi";

export default {
    namespaced: true,
    state: {
        services: [],
        servicesTotal: 0
    },
    actions: {
        fetchServices({ commit }) {
            portfolioApi
                .getServices()
                .then(data => {
                    commit('setServices', data.results);
                    commit('setServicesTotal', data.count);
                })

        }
    }, getters: {

    }, mutations: {
        setServices(state, services) {
            state.services = services
        },
        setServicesTotal(state, total) {
            state.servicesTotal = total
        }
    }
}