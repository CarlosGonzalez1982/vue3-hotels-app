<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import SpinnerElement from '@/app/components/shared-components/spinner-element/SpinnerElement.component.vue';
import ModalElement from '@/app/components/shared-components/modal-element/ModalElement.component.vue';
import { useClientCardComposable } from '@/app/components/clients-page/composables/useClientCard.composable';

const route = useRoute();
const router = useRouter();

const showModal = ref(false);

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

interface Emits {
    (event: 'showModal', client: any):void,
}

const emits = defineEmits<Emits>();
</script>

<template>
    <h1>CLientes por ID</h1>

    <h3 v-if="isUpdating">Guardando...</h3>
    <h3 v-if="isUpdatingSuccessful">Guardado</h3>

    <SpinnerElement v-if="isLoading"/>

    <div class="client__container" v-if="client">
        <img :src="client.picture" alt="client image">
        <h1>{{ client.name }}</h1>
        <form @submit.prevent="updateClientOnSubmit(client)">
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
            <button type="button" :disabled="isUpdating" @click="deleteClientOnSubmit(client)">Eliminar</button>
            <button type="button" :disabled="isUpdating" @click="showModal = true">Edita otras opciones</button>
        </form>
    </div>

    <code>
        {{ client }}
    </code>

    <ModalElement name="modal-element" v-if="showModal">
        <!-- overwrite default content -->
        <template v-slot:header>
            <h3>Modifica los datos del cliente:</h3>
        </template>

        <template v-slot:body>
            <form @submit.prevent="updateClientOnSubmit(client)">
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
                <input type="number"
                       class="input__form--txt"
                       placeholder="Edad"
                       v-model="client.age"/>
                <br>
                <input type="text"
                       class="input__form--txt"
                       placeholder="email"
                       v-model="client.email"/>
                <br>
                <input type="text"
                       class="input__form--txt"
                       placeholder="Género"
                       v-model="client.gender"/>
                <br>
                <input type="text"
                       class="input__form--txt"
                       placeholder="Teléfono"
                       v-model="client.phone"/>
                <br>
                <!--<input type="text"
                       class="input__form--txt"
                       placeholder="Foto"
                       v-model="client.picture"/>
                <br>-->
                <code>
                    {{ client }}
                </code>
            </form>
        </template>

        <template v-slot:footer>
            <button type="submit" class="modal-default-button" @click="emits('showModal', client); showModal = false">
                Editar
            </button>
            <button type="reset" class="modal-default-button" @click="showModal = false">
                Cancelar
            </button>
        </template>
    </ModalElement>
</template>

<style src="./ClientId.component.scss" lang="scss" scoped/>
