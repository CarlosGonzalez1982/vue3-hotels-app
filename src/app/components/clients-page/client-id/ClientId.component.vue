<script setup lang="ts">
import { watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import SpinnerElement from '@/app/components/shared-components/spinner-element/SpinnerElement.component.vue';
import { useClientCardComposable } from '@/app/components/clients-page/composables/useClientCard.composable';

const route = useRoute();
const router = useRouter();

const {
    client,
    isLoading,
    updateClientOnSubmit,
    deleteClientOnSubmit,
    clientMutation,
    clientDeleteMutation,
    isUpdating,
    isUpdatingSuccessful,
    isError,
    isErrorUpdating
} = useClientCardComposable( +route.params.id );

watch( clientMutation.isSuccess, () => {
    setTimeout(() => {
        clientMutation.reset();
    }, 2000);
});

watch( clientDeleteMutation.isSuccess, () => {
    router.push({ name: 'clients-list' });
});

watch( isError, () => {
    if (isError.value) router.replace('/');
});
</script>

<template>
    <h1>CLientes por ID</h1>

    <h3 v-if="isUpdating">Guardando...</h3>
    <h3 v-if="isUpdatingSuccessful">Guardado</h3>

    <SpinnerElement v-if="isLoading"/>

    <div v-if="client">
        <h1>{{ client.name }}</h1>
        <form @submit.prevent="updateClientOnSubmit(client!)">
            <input type="text"
                   class="input__form--txt"
                   placeholder="Nombre"
                   v-model="client.name"/>
            <br>
            <input type="text"
                   class="input__form--txt"
                   placeholder="Dirección"
                   v-model="client.address"/>
            <br>

            <button type="submit" :disabled="isUpdating">Guardar</button>
            <button type="button" :disabled="isUpdating" @click="deleteClientOnSubmit(client!)">Eliminar</button>
        </form>
    </div>

    <code>
        {{ client }}
    </code>
</template>

<style src="./ClientId.component.scss" lang="scss" scoped/>
