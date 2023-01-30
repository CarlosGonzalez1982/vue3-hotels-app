import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { GetClientsListModel } from "@/app/components/clients-page/clients-list/response-model/getClientsList.model";

export const useClientsListStore = defineStore('clients', () => {


    const currentPage = ref<number>(1);
    const totalPages = ref<number>(5);
    const clients = ref<GetClientsListModel[]>([]);

    return {
        // State properties
        currentPage,
        totalPages,
        clients,
        // Getters
        // Actions
        setClients(newClients: GetClientsListModel[]) {
            clients.value = newClients;
        },
        setPage(page:number) {
            if (currentPage.value === page) return;
            if (page <= 0) return;
            if (page > totalPages.value) return;
            currentPage.value = page;
        }
    };
})
