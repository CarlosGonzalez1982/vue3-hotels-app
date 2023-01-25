<script setup lang="ts">
//import { useHotelsList } from '@/app/components/hotels-page/composables/useHotelsList';
import { useQuery } from '@tanstack/vue-query';
import type { GetHotelsListInterface } from '@/app/components/hotels-page/hotels-list/requestModel/getHotelsList.interface';
import { environment } from '@/environments/environment';
import HotelCard from '@/app/components/hotels-page/hotels-list/hotel-card/HotelCard.component.vue'

/**
 * Composable function
 * const { entries, isLoading, isError, errorMessage } = getHotelsList();
 */

/**
 * TanStack - VueQuery
 * 1er argumento --> Array con el nombre de los elementos que se quieren guardar y lo revisará de su caché para no lanzar más peticiones
 * 2do argumento --> función para traer la data que nos interesa
 */
const endpoint = '/entries.json';
const getHotelsListSlow = async():Promise<GetHotelsListInterface[]> => {

    /**
     * Ralentizamos 3 segundos la conexión para ver si funciona la visualización de caché
     * Comentar después del test
     */
    return new Promise((resolve) => {
        setTimeout( async() => {
            const { data } = await environment.get<GetHotelsListInterface[]>(endpoint);
            resolve(data);
        }, 3000 )
    });

    /**
     * Descomentar después del test
     *
     * const { data } = await environment.get<GetHotelsListInterface[]>('/entries.json');
     * return data;
     */
}

const { isLoading, isError, data: entries, error } = useQuery(
    ['hotels'],
    getHotelsListSlow,
    {
        cacheTime: 1000 * 60, //durante 1 minuto los datos se cargan de caché y no del servicio (para acelerar la vista)
        refetchOnReconnect: true //si nos quedamos sin conexión y tiramos de caché, al volver la conexión lanza la petición para actualizar datos
    }
)
</script>

<template>

    <h1 v-if="isLoading">Loading...</h1>
    <h1 v-if="isError">{{ error }}</h1>

    <div class="cards-list__container">
        <HotelCard v-for="entry of entries"
                   :key="entry.id"
                   :hotel-card="entry"/>
    </div>
</template>


<style scoped>

</style>
