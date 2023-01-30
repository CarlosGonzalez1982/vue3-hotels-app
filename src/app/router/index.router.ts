import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/app/components/home-page/HomePage.component.vue';
import { hotelsRoute } from '@/app/components/hotels-page/index.router';
import { clientsRoute } from '@/app/components/clients-page/index.router';
import { authRoute } from '@/app/components/auth-page/index.router';

const router = createRouter({

    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home-page',
            component: HomePage
        },
        {
            ...hotelsRoute,
            path: '/hotels-page',
            //name: 'hotels-page',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            //component: () => import(/* webpackChunkName: "hotels-page" */ '@/app/components/hotels-page/SpinnerElement.component.vue')
        },
        {
            ...clientsRoute,
            path: '/clients-page',
            //name: 'clients-page',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            //component: () => import(/* webpackChunkName: "clients-page" */ '@/app/components/clients-page/ClientsPage.component.vue')
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
            ...authRoute,
            path: '/auth-page',
            //name: 'auth-page',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            //component: () => import(/* webpackChunkName: "auth-page" */ '@/app/components/auth-page/AuthPage.component.vue')
        },
        {
            path: '/:pathMatch(.*)*',
            redirect: () => ({ name: 'home-page'})
        }
    ]
});

export default router;
