<script setup lang="ts">
import type { GetClientsListInterface } from '@/app/components/clients-page/clients-list/requestModel/getClientsList.interface';

interface Props {
    clients: GetClientsListInterface[];
}

const props = withDefaults(defineProps<Props>(), {
    clients: () => []
});
</script>

<template>
    <ul>
        <li v-for="client of props.clients" :key="client.id">
            <RouterLink :to="{
                name: 'client-id',
                params: {id: client.id}}">
                {{ client.name }}
            </RouterLink>
        </li>
    </ul>
</template>

<style src="./ClientsNameList.component.scss" lang="scss" scoped/>
