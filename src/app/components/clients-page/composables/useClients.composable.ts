import { watch } from 'vue';
import { useQuery } from '@tanstack/vue-query';
import { storeToRefs } from 'pinia';
import { getClientsListService } from '@/app/services/clients.service';
import { useClientsListStore } from '@/app/components/clients-page/store/clientsList.store';

export const useClientsList = () => {

    const clientsStore = useClientsListStore();
    const { currentPage, clients, totalPages } = storeToRefs(clientsStore);
    /**
     * VueQuery
     * 1er argumento --> Array con el nombre de los elementos que se quieren guardar y lo revisará de su caché para no lanzar más peticiones
     * 2do argumento --> función para traer la data que nos interesa
     */
    const { isLoading, data /*, isError, error*/ } = useQuery(
        ['clients?page=', 1],
        () => getClientsListService()
    );

    watch(data,clients => {
        if (clients) clientsStore.setClients(clients)
    });

    return {
        // Properties
        isLoading,
        clients
        // Getters
        // Methods
    }
}
