import type { RouteRecordRaw } from "vue-router";
import HotelsSearch from '@/app/components/hotels-page/hotels-search/HotelsSearch.component.vue';
import HotelsList from '@/app/components/hotels-page/hotels-list/HotelsList.component.vue';
import HotelsId from '@/app/components/hotels-page/hotels-id/HotelsId.component.vue';
import HotelsPage from '@/app/components/hotels-page/HotelsPage.component.vue';


export const hotelsRoute: RouteRecordRaw = {
    path: '/hotels-page',
    redirect: '/hotels-page/list',
    component: HotelsPage,
    children: [
        {
            path: 'by/id',
            name: 'hotels-id',
            props: { title: 'Acceder por Id', visible: false }, // no queremos que se muestre esta ruta ya que se hace por id dinamico
            component: HotelsId
        },
        {
            path: 'list',
            name: 'hotels-list',
            props: { title: 'Listado de hoteles', visible: true },
            component: HotelsList
        },
        {
            path: 'search',
            name: 'hotels-search',
            props: { title: 'Buscar hotel', visible: true },
            component: HotelsSearch
        },
    ]
};
