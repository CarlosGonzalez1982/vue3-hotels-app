import type { RouteRecordRaw } from 'vue-router';
import AuthPage from '@/app/components/auth-page/AuthPage.component.vue';

const ROUTE_NAME = 'auth-page';

export const authRoute: RouteRecordRaw = {
    path: `/${ ROUTE_NAME }`,
    redirect: `/${ ROUTE_NAME }/login`,
    component: AuthPage,
    children: [
        {
            path: `/${ ROUTE_NAME }/login`,
            name: 'login-form',
            component: () => import(/* webpackChunkName: "login-form" */ '@/app/components/auth-page/login-form/LoginForm.component.vue')
        },
        {
            path: `/${ ROUTE_NAME }/register`,
            name: 'register-form',
            component: () => import(/* webpackChunkName: "register-form" */ '@/app/components/auth-page/register-form/RegisterForm.component.vue')
        }
    ]
};
