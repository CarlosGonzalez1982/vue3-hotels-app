import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { GetHotelsListInterface } from '@/app/components/hotels-page/hotels-list/requestModel/getHotelsList.interface';


export const useHotelsListStore = defineStore('hotels', () => {

    const hotels = ref<GetHotelsListInterface[]>([]);

    return {
        // State properties
        hotels,
        // Getters
        // Actions
        setHotels(newHotels: GetHotelsListInterface[]) {
            hotels.value = newHotels;
        },
    };
})
