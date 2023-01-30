<script setup lang="ts">
import HotelCard from '@/app/components/hotels-page/hotels-list/hotel-card/HotelCard.component.vue'
import type { GetHotelsListModel } from '@/app/components/hotels-page/hotels-list/response-model/getHotelsList.model';

interface Props {
    hotelsList: GetHotelsListModel[];
}

const props = withDefaults(defineProps<Props>(), {
    hotelsList: () => []
});
</script>

<template>
    <div class="cards-list__container">
        <HotelCard v-for="entry of props.hotelsList"
                   :key="entry.id"
                   :hotel-card="entry"/>
    </div>
</template>

<style src="./HotelsCardList.component.scss" lang="scss" scoped/>
