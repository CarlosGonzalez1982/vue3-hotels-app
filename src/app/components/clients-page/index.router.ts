import type { RouteRecordRaw } from 'vue-router';
import ClientsPage from '@/app/components/clients-page/ClientsPage.component.vue';

const ROUTE_NAME = 'clients-page';

export const clientsRoute: RouteRecordRaw = {
    path: `/${ ROUTE_NAME }`,
    redirect: `/${ ROUTE_NAME }/list`,
    component: ClientsPage,
    children: [
        {
            path: `/${ ROUTE_NAME }/by/:id`,
            name: 'client-id',
            component: () => import(/* webpackChunkName: "client-id-page" */ '@/app/components/clients-page/client-id/ClientId.component.vue')
        },
        {
            path: `/${ ROUTE_NAME }/list`,
            name: 'clients-list',
            component: () => import(/* webpackChunkName: "clients-list-page" */ '@/app/components/clients-page/clients-list/ClientsList.component.vue')
        }
    ]
};
