import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

import store from "@/store";
Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: "/projects/:id",
        name: "project",
        props: true,
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ "@/views/ProjectView.vue"),
        beforeEnter(routeTo, routeFrom, next) {
            store
                .dispatch("projects/fetchProject", routeTo.params.id)
                .then((project) => {
                    routeTo.params.project = project;
                    next();
                })
                .catch((error) => {
                    next({ name: "home" });
                    const notification = {
                        type: "error",
                        message:
                            "There was a problem fetching project: " +
                            error.message,
                    };
                    store.dispatch("notifications/add", notification);
                });
        },
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
