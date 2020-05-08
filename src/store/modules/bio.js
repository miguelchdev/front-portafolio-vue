import portfolioApi from "@/services/portfolioApi";

export default {
    namespaced: true,
    state: {
        name: "",
        last_name: "",
        welcome_message: "",
        about: "",
        social_networks: [],
    },
    actions: {
        fetchBio({ commit, dispatch }) {
            return portfolioApi
                .getBio(1)
                .then(
                    ({
                        name,
                        last_name,
                        welcome_message,
                        about,
                        social_networks,
                    }) => {
                        commit("setName", name);
                        commit("setLastName", last_name);
                        commit("setWelcomeMessage", welcome_message);
                        commit("setAbout", about);
                        commit("setSocialNetworks", social_networks);
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
                });
        },
    },
    getters: {
        full_name({ name, last_name }) {
            return name + " " + last_name;
        },
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
        },
    },
};
