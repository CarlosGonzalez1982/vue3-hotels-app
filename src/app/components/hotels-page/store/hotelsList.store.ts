import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { GetHotelsListModel } from '@/app/components/hotels-page/hotels-list/response-model/getHotelsList.model';


export const useHotelsListStore = defineStore('hotels', () => {

    const hotels = ref<GetHotelsListModel[]>([]);

    return {
        // State properties
        hotels,
        // Getters
        // Actions
        setHotels(newHotels: GetHotelsListModel[]) {
            hotels.value = newHotels;
        },
    };
})
