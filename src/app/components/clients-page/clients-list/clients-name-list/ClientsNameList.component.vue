<script setup lang="ts">
import { GetClientsListModel } from '@/app/components/clients-page/clients-list/response-model/getClientsList.model';

interface Props {
    clients: GetClientsListModel[];
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
