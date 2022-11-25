import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "@/views/HomeView.vue";


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    linkActiveClass: 'active',
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
            component: () => import("@/views/Nov16View.vue"),
        },
        {
            path: "/nov_14_15",
            name: "nov_14_15",
            component: () => import("@/views/ProductView.vue"),
        },
        {
            path: "/nov_17",
            name: "Nov_17",
            component: (param1, param2) => import("@/views/Nov17View.vue"),
        },
        {
            path: "/nov_18",
            name: "Nov_18",
            component: () => import("@/views/Nov18View.vue"),
        },
        {
            path: "/nov_21",
            name: "Nov_21",
            component: () => import("@/views/Nov21View.vue"),
        },
    ],
});

export default router
