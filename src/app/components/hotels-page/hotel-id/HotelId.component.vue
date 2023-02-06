<script setup lang="ts">
import {computed, ref, watchEffect} from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useHotelCardComposable } from '@/app/components/hotels-page/composables/useHotelCard.composable';
import SpinnerElement from '@/app/components/shared-components/spinner-element/SpinnerElement.component.vue';
import ModalElement from '@/app/components/shared-components/modal-element/ModalElement.component.vue';
import { useCounterStore } from '@/app/stores/counterElement';
import { isAuthenticatedGuard } from "@/app/components/auth-page/auth-guard.router";
import {useAuthStore} from "@/app/components/auth-page/store/auth.store";
import Swal from "sweetalert2";


const router = useRouter();
const route  = useRoute();
const { id } = route.params as { id: string };

const showModal = ref(false);
const count = computed(() => useCounterStore().count);
const increment = computed(() => useCounterStore().increment);
const decrement = computed(() => useCounterStore().decrement);
const restart = computed(() => useCounterStore().restart());
const authStatus = useAuthStore().authStatus;

const {
    errorMessage,
    hasError,
    isLoading,
    hotel,
} = useHotelCardComposable(+id);

watchEffect(() => {
    if ( !isLoading.value && hasError.value ) {
        router.replace('/hotels-page');
    }
});

interface Emits {
    (event: 'showModal', rooms: number):void,
}

const emits = defineEmits<Emits>();

const verifyLog = () => {

    if (authStatus != 'authenticated') {
        Swal.fire('Error', 'Para poder reservar tienes que estar loggeado', 'error');
    }
}
</script>

<template>

    <section class="hotels-page__container">

        <SpinnerElement v-if="isLoading"/>

        <h1 v-else-if="hasError">{{ errorMessage }}</h1>

        <div v-else-if="hotel">
            <section class="card__container--selected">
                <img class="card__image--selected" :src="hotel.img" :alt="hotel.name">
                <h2>{{ hotel.name }}</h2>
                <div class="card__icon--selected">
                    <img v-for="number of hotel.category" :key="number" src="@/assets/img/icons/star-orange.svg" :alt="hotel.category"/>
                </div>
                <p style="margin-bottom: 12px;" v-if="count && !showModal" >Número de habitaciones reservadas: <b>{{ count }}</b></p>
                <button class="card__button--selected" @click="verifyLog(); showModal = true">
                    {{ $t("hotels.list.reservation") }}
                </button>
            </section>
        </div>

        <ModalElement name="modal-element" v-if="showModal && authStatus === 'authenticated'">
            <!-- overwrite default content -->
            <template v-slot:header>
                <h3>Selecciona el número de habitaciones</h3>
            </template>

            <template v-slot:body>
                <p>Número de habitaciones: <b>{{ count }}</b></p>
                <button type="button" @click="increment">+1</button>
                <button type="button" @click="decrement">-1</button>
            </template>

            <template v-slot:footer>
                <button class="modal-default-button" @click="emits('showModal', count); showModal = false" :disabled="!count">
                    Reservar
                </button>
                <button class="modal-default-button" @click="restart; showModal = false">
                    Cancelar
                </button>
            </template>
        </ModalElement>


    </section>
</template>

<style src="./HotelId.component.scss" lang="scss" scoped/>
