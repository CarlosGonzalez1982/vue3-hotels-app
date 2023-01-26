import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { GetClientsListInterface } from "@/app/components/clients-page/clients-list/requestModel/getClientsList.interface";

export const useClientsListStore = defineStore('clients', () => {


    const currentPage = ref<number>(1);
    const totalPages = ref<number>(5);
    const clients = ref<GetClientsListInterface[]>([]);

    return {
        // State properties
        currentPage,
        totalPages,
        clients,
        // Getters
        // Actions
        setClients(newClients: GetClientsListInterface[]) {
            clients.value = newClients;
        },
        setPage(page:number) {
            if (currentPage.value === page) return;
            currentPage.value = page;
        }
    };
})
