import { ref, computed } from 'vue';
import { useQuery } from '@tanstack/vue-query';
import { getHotelsListService } from '@/app/services/hotels.service';
import type { GetHotelsListInterface } from '@/app/components/hotels-page/hotels-list/requestModel/getHotelsList.interface';


const hotels = ref<GetHotelsListInterface[]>([]);
const hasError = ref<boolean>(false);
const errorMessage = ref<string | null >(null);

const loadedHotels = (data: GetHotelsListInterface[]) => {
    hasError.value = false;
    errorMessage.value = null;
    hotels.value = data;
}

export const useHotelsList = () => {

    /**
     * VueQuery
     * 1er argumento --> Array con el nombre de los elementos que se quieren guardar y lo revisará de su caché para no lanzar más peticiones
     * 2do argumento --> función para traer la data que nos interesa
     */
    const { isLoading/*, isError, data, error*/ } = useQuery(
        ['hotels'],
        getHotelsListService,
        {
            onSuccess: loadedHotels,
        }
    );

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
