<script setup lang="ts">
import HotelsCardList from '@/app/components/hotels-page/hotels-list/hotels-card-list/HotelsCardList.vue';
import { useHotelsList } from '@/app/components/hotels-page/composables/useHotelsList';

interface Props {
    title?: string;
    visible?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    title: '',
    visible: true
});

const {
    hotels,
    errorMessage,
    hasError,
    isLoading,
    count,
} = useHotelsList();
</script>

<template>

    <h1 v-if="isLoading" class="cards-list__container">Loading...</h1>

    <div v-else-if="hasError" class="cards-list__container" >
        <h1>Error al cargar</h1>
        <p>{{ errorMessage }}</p>
    </div>

    <template v-else>
        <section class="hotels-page__container">
            <h1 class="hotels-page__title--shape">{{ props.title }} ({{ count }})</h1>
            <HotelsCardList :hotels-list="hotels"/>
        </section>
    </template>
</template>

<style src="./HotelsList.component.scss" lang="scss" scoped/>
