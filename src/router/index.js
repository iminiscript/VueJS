import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "../views/HomeView.vue";
import Nov17Vue from "../views/Nov17View.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
        },
        {
            path: "/nov_16",
            name: "Nov_16",
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import("../views/Nov16View.vue"),
        },
        {
            path: "/nov_14_15",
            name: "nov_14_15",
            component: () => import("../views/ProductView.vue"),
        },
        {
            path: "/nov_17",
            name: "Nov_17",
            component: Nov17Vue,
        },
    ],
});

export default router
