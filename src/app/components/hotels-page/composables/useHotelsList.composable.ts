import {ref, computed, watch} from 'vue';
import { useQuery } from '@tanstack/vue-query';
import { storeToRefs } from 'pinia';
import { getHotelsListService } from '@/app/services/hotels.service';
import type { GetHotelsListModel } from '@/app/components/hotels-page/hotels-list/response-model/getHotelsList.model';
import { useHotelsListStore } from '@/app/stores/hotelsList.store';


const hotels = ref<GetHotelsListModel[]>([]);
const hasError = ref<boolean>(false);
const errorMessage = ref<string | null >(null);

const loadedHotels = (data: GetHotelsListModel[]) => {
    hasError.value = false;
    errorMessage.value = null;
    hotels.value = data;
}

export const useHotelsListComposable = () => {

    const hotelsStore = useHotelsListStore();
    const { hotels } = storeToRefs(hotelsStore);

    /**
     * VueQuery
     * 1er argumento --> Array con el nombre de los elementos que se quieren guardar y lo revisará de su caché para no lanzar más peticiones
     * 2do argumento --> función para traer la data que nos interesa
     */
    const { isLoading, data /*, isError, data, error*/ } = useQuery(
        ['hotels'],
        getHotelsListService,
        {
            onSuccess: loadedHotels
        }
    );

    watch(data,hotels => {
        if (hotels) hotelsStore.setHotels(hotels);
    });

    return {
        // Properties
        hotels,
        errorMessage,
        hasError,
        isLoading,
        // Getters
        count: computed(() => hotels.value.length),
        // Methods
    }
}
