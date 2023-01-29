<script setup lang="ts">
import {ref, toRef, watch} from 'vue';

interface Props {
    totalPages: number;
    currentPage: number;
}

interface Emits {
    (event: 'pageChanged', page: number):void
}

const props = withDefaults(defineProps<Props>(), {
    totalPages: 1,
    currentPage: 1
});

const emits = defineEmits<Emits>();

const totalPages = toRef(props,'totalPages');
const currentPage = toRef(props,'currentPage');

const totalPageNumber = ref<number[]>([]);

watch(totalPages, () => {
        totalPageNumber.value = [...new Array(totalPages.value)].map((value, index) => index + 1);
    }, {
    immediate: true
});
</script>

<template>
    <div class="paginator__container">
        <button class="paginator__option--style" :disabled="currentPage === 1" @click="emits('pageChanged', currentPage - 1)"><i class="fa fa-angle-double-left"></i></button>
        <button class="paginator__option--style"
                v-for="number of totalPageNumber"
                :key="number"
                @click="emits('pageChanged', number)"
                :class="{ 'paginator__option--active': currentPage === number }">
            {{ number }}
        </button>

        <!--<span class="paginator__option--dots">...</span>-->

        <button class="paginator__option--style" :disabled="currentPage === totalPages" @click="emits('pageChanged', currentPage + 1)"><i class="fa fa-angle-double-right"></i></button>
    </div>
</template>

<style src="./PaginatorElement-component.scss" lang="scss" scoped/>
