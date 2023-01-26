<script setup lang="ts">
import { watchEffect } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useHotelCard } from "@/app/components/hotels-page/composables/useHotelCard";

const router = useRouter();
const route  = useRoute();
const { id } = route.params as { id: string };

const {
    errorMessage,
    hasError,
    isLoading,
    hotel,
} = useHotelCard(+id);

watchEffect(() => {
    if ( !isLoading.value && hasError.value ) {
        router.replace('/hotels-page');
    }
});

const goTo = () => {
    router.push('/');
}
</script>

<template>
    <section class="hotels-page__container">

        <h1 v-if="isLoading">{{ $t("hotels.list.loading") }}</h1>
        <h1 v-else-if="hasError">{{ errorMessage }}</h1>

        <div v-else-if="hotel">
            <section class="card__container--selected">
                <img class="card__image--selected" :src="hotel.img" :alt="hotel.name">
                <h2>{{ hotel.name }}</h2>
                <div class="card__icon--selected">
                    <img v-for="number of hotel.category" :key="number" src="@/assets/img/icons/star-orange.svg" :alt="hotel.category"/>
                </div>
                <button class="card__button--selected" @click="goTo()">
                    {{ $t("hotels.list.reservation") }}
                </button>
            </section>
        </div>
    </section>
</template>

<style src="./HotelId.component.scss" lang="scss" scoped/>
