let nextId = 1;
export default {
    namespaced: true,
    state: {
        notifications: [],
    },
    actions: {
        add({ commit }, notification) {
            commit("push", notification);
        },
        remove({ commit }, notificationToRemove) {
            commit("delete", notificationToRemove);
        },
    },
    getters: {},
    mutations: {
        push(state, notification) {
            state.notifications.push({
                ...notification,
                id: nextId++,
            });
        },
        delete(state, notificationToRemove) {
            state.notifications = state.notifications.filter(
                (notification) => notification.id !== notificationToRemove.id
            );
        },
    },
};
