import { ref, computed } from 'vue';
import { useQuery } from '@tanstack/vue-query';
import { getHotelByIdService } from '@/app/services/hotels.service';
import type { GetHotelsListInterface } from '@/app/components/hotels-page/hotels-list/requestModel/getHotelsList.interface';


const hotelSet = ref<{ [id: number]: GetHotelsListInterface }>({});
const hasError = ref<boolean>(false);
const errorMessage = ref<string | null>(null);

const loadedCard = (data: GetHotelsListInterface) => {

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

    return {
        // Properties
        errorMessage,
        hasError,
        isLoading,
        // Getters
        hotel: computed<GetHotelsListInterface | null>(() => hotelSet.value[id]),
        // Methods
    }
}
