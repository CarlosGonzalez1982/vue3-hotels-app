import type { RouteRecordRaw } from "vue-router";
import HotelsSearch from '@/app/components/hotels-page/hotels-search/HotelsSearch.component.vue';
import HotelsList from '@/app/components/hotels-page/hotels-list/HotelsList.component.vue';
import HotelId from '@/app/components/hotels-page/hotel-id/HotelId.component.vue';
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
            props: { title: 'Acceder por Id', visible: false }, // no queremos que se muestre esta ruta ya que se hace por id dinámico
            component: HotelId
        },
        {
            path: `/${ ROUTE_NAME }/list`,
            name: 'hotels-list',
            props: { title: 'Listado de hoteles', visible: true },
            component: HotelsList
        },
        {
            path: `/${ ROUTE_NAME }/search`,
            name: 'hotels-search',
            props: { title: 'Buscar hotel', visible: true },
            component: HotelsSearch
        },
    ]
};
