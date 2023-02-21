import { ref, computed } from 'vue';
import { useQuery } from '@tanstack/vue-query';
import { getHotelByIdService } from '@/app/services/hotels.service';
import type { GetHotelsListModel } from '@/app/components/hotels-page/hotels-list/response-model/getHotelsList.model';
import Swal from 'sweetalert2';
import { useAuthStore } from '@/app/components/auth-page/store/auth.store';


const hotelSet = ref<{ [id: number]: GetHotelsListModel }>({});
const hasError = ref<boolean>(false);
const errorMessage = ref<string | null>(null);

const loadedCard = (data: GetHotelsListModel) => {

    hasError.value = false;
    errorMessage.value = null;
    hotelSet.value[data.id] = data;
}

const loadedCardWithError = (error: string) => {
    hasError.value = true;
    errorMessage.value = error;
}

export const useHotelCardComposable = (id: number) => {

    const { isLoading } = useQuery(
        ['hotel', id],
        () => getHotelByIdService(id),
        {
            onSuccess: loadedCard,
            onError: loadedCardWithError,
        }
    );

    const authStatus = useAuthStore().authStatus;


    return {
        // Properties
        errorMessage,
        hasError,
        isLoading,
        // Getters
        hotel: computed<GetHotelsListModel | null>(() => hotelSet.value[id]),
        // Methods
        verifyLog() {
            if (authStatus != 'authenticated') {
                Swal.fire('Error', 'Para poder reservar tienes que estar loggeado', 'error');
            }
        }
    }
}
