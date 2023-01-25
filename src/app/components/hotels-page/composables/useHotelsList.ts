import { onMounted, ref } from 'vue';
import axios from "axios";
import type { GetHotelsListInterface } from '@/app/components/hotels-page/hotels-list/requestModel/getHotelsList.interface';
import { environment } from '@/environments/environment';

/**
 *  Definiendo las constantes en el scope global y
 *  consultando con un condicional si la petición ya se ha hecho
 *  evitamos llamas al servicio cada vez que clickamos en la opción del menú
 */
const entries = ref<GetHotelsListInterface[]>([]);
const isLoading = ref<boolean>(true);
const isError = ref<boolean>(false);
const errorMessage = ref<string>();

export const useHotelsList = () => {

    const endpoint = '/entries.json';

    const loadHotelsList = async() => {

        try {

            const { data } = await environment.get<GetHotelsListInterface[]>(endpoint);
            entries.value = data;
            isLoading.value = false;

        } catch (error) {

            isError.value = true;
            /**
             * Puede ser error de servicio (Axios) o de algún problema interno
             */
            // TODO: Controlar los dos
            if (axios.isAxiosError(error)) return errorMessage.value = error.message;
            errorMessage.value = JSON.stringify(error);
            isLoading.value = false;
        }
    };

    onMounted(async () => {
        await loadHotelsList();
    });

    return {
        entries,
        isLoading,
        isError,
        errorMessage
    }
}
