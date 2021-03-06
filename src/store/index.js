import Vue from "vue";
import Vuex from "vuex";
import projects from "./modules/projects";
import services from "./modules/services";
import notifications from "./modules/notifications";
import bio from "./modules/bio";
import pages from "./modules/pages";
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        projects,
        services,
        bio,
        notifications,
        pages,
    },
    state: {
        buffer: [],
    },
    actions: {
        addAction({ commit }, action) {
            commit("addBuffer", action);
        },
        removeAction({ commit }, action) {
            commit("removeBuffer", action);
        },
    },
    getters: {
        loading({ buffer }) {
            return buffer.length != 0;
        },
        isLoading({ buffer }) {
            return (element) => buffer.includes(element);
        },
    },
    mutations: {
        addBuffer(state, action) {
            state.buffer.push(action);
        },
        removeBuffer(state, action) {
            state.buffer = state.buffer.filter((item) => item !== action);
        },
    },
});
