import portfolioApi from "@/services/portfolioApi";

export default {
    namespaced: true,
    state: {
        bio: {}
    },
    actions: {
        fetchBio({ commit }) {
            portfolioApi.getBio(1).then(data => {
                commit("setBio", data);
            });
        }
    },
    getters: {
        name(state) {
            return state.bio.name;
        },
        last_name(state) {
            return state.bio.last_name;
        },
        full_name(state) {
            return state.bio.name + " " + state.bio.last_name;
        },
        welcome_message(state) {
            return state.bio.welcome_message;
        },
        about(state) {
            return state.bio.about;
        },
        social_networks(state){
            return state.bio.social_networks
        }
      
    },
    mutations: {
        setBio(state, bio) {
            state.bio = bio;
        }
    }
};
