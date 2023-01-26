import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', () => {

    const count = ref<number>(0);

    const incrementBy = (value: number) => {
        count.value += value;
    }

    return {
        // State properties
        count,
        // Getters
        doubleCount: computed(() => count.value * 2),
        // Actions
        incrementBy,
        increment: () => incrementBy(1)
    };
})
