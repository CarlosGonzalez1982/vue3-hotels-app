<script setup lang="ts">
import type { GetClientsListInterface } from '@/app/components/clients-page/clients-list/response-model/getClientsList.response-model';

interface Props {
    clients: GetClientsListInterface[];
}

const props = withDefaults(defineProps<Props>(), {
    clients: () => []
});
</script>

<template>
    <ul class="clients-page__list--container">
        <li v-for="client of props.clients" :key="client.id" class="clients-page__list--item">
            <RouterLink :to="{
                name: 'client-id',
                params: { id: client.id }}">
                {{ client.name }}
            </RouterLink>
        </li>
    </ul>
</template>

<style src="./ClientsNameList.component.scss" lang="scss" scoped/>
