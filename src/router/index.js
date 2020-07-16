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
        path: "*",
        name: "error",
        component: () =>
            import(/* webpackChunkName: "about" */ "@/views/404.vue"),
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
        async beforeEnter(routeTo, routeFrom, next) {
            const { id } = routeTo.params;
            const project = await store.dispatch("projects/fetchProject", id);
            if (project) {
                routeTo.params.project = project;
                next();
            } else {
                next({ name: "error" });
            }
        },
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { x: 0, y: 0 };
        }
    },
});

export default router;
