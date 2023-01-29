<script setup lang="ts">
import ClientsNameList from '@/app/components/clients-page/clients-list/clients-name-list/ClientsNameList.component.vue';
import PaginatorElement from '@/app/components/shared-components/paginator-element/PaginatorElement.component.vue'
import SpinnerElement from '@/app/components/shared-components/spinner-element/SpinnerElement.component.vue';
import { useClientsListComposable } from '@/app/components/clients-page/composables/useClientsList.composable';

const { isLoading, clients, currentPage, totalPages, getPage } = useClientsListComposable()

</script>

<template>
    <h1 class="clients-page__title--shape">{{ $t("clients.list.title") }}</h1>
    <section class="clients-page__container">
        <SpinnerElement v-if="isLoading"/>
        <ClientsNameList :clients="clients"/>
        <PaginatorElement :current-page="currentPage" :total-pages="totalPages" @page-changed="getPage"/>
    </section>
</template>

<style src="./ClientsList.component.scss" lang="scss" scoped/>
