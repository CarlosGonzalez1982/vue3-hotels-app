import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counterRooms', () => {

    const count = ref(0);
    const doubleCount = computed(() => count.value * 2);

    function increment() {
        count.value++;
    }

    function decrement() {
        count.value < 1 ? count.value = 0 : count.value--;
    }

    function restart() {
        count.value = 0;
    }

    return {
        count,
        doubleCount,
        increment,
        decrement,
        restart
    };
})
