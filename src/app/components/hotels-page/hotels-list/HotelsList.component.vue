<script setup lang="ts">
import HotelsCardList from '@/app/components/hotels-page/hotels-list/hotels-card-list/HotelsCardList.vue';

interface Props {
    title?: string;
    visible?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
    title: '',
    visible: true
});
</script>

<template>
    <section class="hotels-page__container">
        <h1 class="hotels-page__title--shape">{{ props.title }}</h1>
        <HotelsCardList/>
    </section>
</template>

<style src="./HotelsList.component.scss" lang="scss" scoped/>
