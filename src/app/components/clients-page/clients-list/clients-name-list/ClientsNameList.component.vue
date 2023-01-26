<script setup lang="ts">
import { useClientsList } from "@/app/components/clients-page/composables/useClients.composable";

const { isLoading, clients} = useClientsList()
</script>

<template>
    <h1>{{ $t("clients.list.title") }}</h1>
    <ul>
        <li v-for="client of clients" :key="client.id">
            <RouterLink :to="{
                name: 'client-id',
                params: {id: client.id}}">
                {{ client.name }}
            </RouterLink>
        </li>
    </ul>
</template>

<style src="./ClientsNameList.component.scss" lang="scss" scoped/>
