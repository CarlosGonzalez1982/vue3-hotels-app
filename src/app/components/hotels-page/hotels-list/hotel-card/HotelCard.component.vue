<script setup lang="ts">
import { toRef } from 'vue';
import type { GetHotelsListInterface } from '@/app/components/hotels-page/hotels-list/requestModel/getHotelsList.interface';

interface Props {
    hotelCard: GetHotelsListInterface;
}

/**
 * No se puede desestructurar directamente desde defineProps
 * Perdemos la reactividad
 */
const props = defineProps<Props>();
const hotelCard = toRef(props, 'hotelCard');
</script>

<template>
    <section class="card__container">
        <img class="card__image--shape" :src="hotelCard.img" :alt="hotelCard.name">
        <h3>{{ hotelCard.name }}</h3>
        <p>{{ hotelCard.category }}</p>
    </section>
</template>

<style src="./HotelCard.component.scss" lang="scss" scoped/>
