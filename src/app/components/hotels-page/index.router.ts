import type { RouteRecordRaw } from 'vue-router';
import HotelsPage from '@/app/components/hotels-page/HotelsPage.component.vue';

const ROUTE_NAME = 'hotels-page';

export const hotelsRoute: RouteRecordRaw = {
    path: `/${ ROUTE_NAME }`,
    redirect: `/${ ROUTE_NAME }/list`,
    component: HotelsPage,
    children: [
        {
            path: `/${ ROUTE_NAME }/by/:id`,
            name: 'hotel-id',
            props: {
                title: 'header2.nav1',
                visible: false
            }, // no queremos que se muestre esta ruta ya que se hace por id dinámico
            component: () => import(/* webpackChunkName: "hotel-id-page" */ '@/app/components/hotels-page/hotel-id/HotelId.component.vue')
        },
        {
            path: `/${ ROUTE_NAME }/list`,
            name: 'hotels-list',
            props: {
                title: 'header2.nav2',
                visible: true
            },
            component: () => import(/* webpackChunkName: "hotels-list-page" */ '@/app/components/hotels-page/hotels-list/HotelsList.component.vue')
        },
        {
            path: `/${ ROUTE_NAME }/search`,
            name: 'hotel-search',
            props: {
                title: 'header2.nav3',
                visible: true
            },
            component: () => import(/* webpackChunkName: "hotel-search-page" */ '@/app/components/hotels-page/hotel-search/HotelSearch.component.vue')
        },
    ]
};
