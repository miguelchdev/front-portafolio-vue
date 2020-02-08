import portfolioApi from "@/services/portfolioApi";

export default {
    namespaced: true,
    state: {
        name: "",
        last_name: "",
        welcome_message: "",
        about: "",
        social_networks: []
    },
    actions: {
        fetchBio({ commit }) {
            return portfolioApi
                .getBio(1)
                .then(
                    ({
                        name,
                        last_name,
                        welcome_message,
                        about,
                        social_networks
                    }) => {
                        commit("setName",name);
                        commit("setLastName", last_name);
                        commit("setWelcomeMessage", welcome_message);
                        commit("setAbout", about);
                        commit("setSocialNetworks", social_networks);
                    }
                );
        }
    },
    getters: {
        full_name(state) {
            return state.name + " " + state.last_name;
        }
    },
    mutations: {
        setName(state, name) {
            state.name = name;
        },
        setLastName(state, last_name) {
            state.last_name = last_name;
        },
        setWelcomeMessage(state, welcome_message) {
            state.welcome_message = welcome_message;
        },
        setAbout(state, about) {
            state.about = about;
        },
        setSocialNetworks(state, social_networks) {
            state.social_networks = social_networks;
        }
    }
};
