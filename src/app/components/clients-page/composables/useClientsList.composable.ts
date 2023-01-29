import { computed, watch } from 'vue';
import { useQuery } from '@tanstack/vue-query';
import { storeToRefs } from 'pinia';
import { getClientsListService } from '@/app/services/clients.service';
import { useClientsListStore } from '@/app/components/clients-page/store/clientsList.store';

export const useClientsListComposable = () => {

    const clientsStore = useClientsListStore();
    const { currentPage, clients, totalPages } = storeToRefs(clientsStore);
    /**
     * VueQuery
     * 1er argumento --> Array con el nombre de los elementos que se quieren guardar y lo revisará de su caché para no lanzar más peticiones
     * 2do argumento --> función para traer la data que nos interesa
     */
    const { isLoading, data /*, isError, error*/ } = useQuery(
        ['clients?page=', currentPage], // useQuery saca el value directamente de la variable reactiva sin el .value
        () => getClientsListService(currentPage.value),
        /*{
            staleTime: 1000 * 60, //no lances la petición al servidor en 60 segundos
        }*/
    );

    watch( data,clients => {
            if (clients) clientsStore.setClients(clients);
        },{
        immediate: true
    });

    return {
        // Properties
        isLoading,
        clients,
        currentPage,
        totalPages,
        // Methods
        getPage( page: number) {
            clientsStore.setPage(page);
        }
        // Getters
    }
}
