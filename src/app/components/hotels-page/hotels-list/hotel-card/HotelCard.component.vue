<script setup lang="ts">
import { toRef } from 'vue';
import { useRouter } from 'vue-router';
import type { GetHotelsListModel } from '@/app/components/hotels-page/hotels-list/response-model/getHotelsList.model';

interface Props {
    hotelCard: GetHotelsListModel;
}

/**
 * No se puede desestructurar directamente desde defineProps
 * Perdemos la reactividad
 */
const props = withDefaults(defineProps<Props>(), {
    hotelCard: () => ({
        id: 0,
        category: 0,
        img: '',
        name: ''
    })
});

//const props = defineProps<Props>();
const hotelCard = toRef(props, 'hotelCard');
const router = useRouter();

const goTo = () => {
    router.push(`by/${ hotelCard.value.id }`);
}
</script>

<template>
    <section class="card__container" @click="goTo()">
        <img class="card__image--shape" :src="hotelCard.img" :alt="hotelCard.name">
        <h3>{{ hotelCard.name }}</h3>
        <div class="card__icon--category">
            <img v-for="number of hotelCard.category" :key="number" src="@/assets/img/icons/star-orange.svg" :alt="hotelCard.category"/>
        </div>
    </section>
</template>

<style src="./HotelCard.component.scss" lang="scss" scoped/>
