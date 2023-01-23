import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/app/components/home-page/HomePage.component.vue';

const router = createRouter({

    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home-page',
            component: HomePage
        },
        {
            path: '/hotels-page',
            name: 'hotels-page',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "hotels-page" */ '@/app/components/hotels-page/HotelsPage.component.vue')
        },
        {
            path: '/contact-page',
            name: 'contact-page',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "contact-page" */ '@/app/components/contact-page/ContactPage.component.vue')
        },
        {
            path: '/login-page',
            name: 'login-page',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "login-page" */ '@/app/components/login-page/LoginPage.component.vue')
        },
        {
            path: '/:pathMatch(.*)*',
            redirect: () => ({ name: 'home-page'})
        }
    ]
});

export default router;
