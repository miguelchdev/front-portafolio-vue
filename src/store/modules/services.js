import portfolioApi from "@/services/portfolioApi";

export default {
    namespaced: true,
    state: {
        items: [],
        itemsTotal: 0
    },
    actions: {
        fetchServices({ commit }) {
            return portfolioApi
                .getServices()
                .then(data => {
                    commit('setServices', data.results);
                    commit('setServicesTotal', data.count);
                })

        }
    }, getters: {

    }, mutations: {
        setServices(state, services) {
            state.items = services
        },
        setServicesTotal(state, total) {
            state.itemsTotal = total
        }
    }
}
