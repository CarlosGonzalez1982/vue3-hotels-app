import { computed, watch, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useQuery, useMutation, useQueryClient } from '@tanstack/vue-query';
import { deleteClientByIdService, getClientByIdService, updateClientByIdService } from '@/app/services/clients.service';
import type { GetClientsListModel } from '@/app/components/clients-page/clients-list/response-model/getClientsList.model';


export const useClientCardComposable = (id: number) => {

    const client = ref<GetClientsListModel>();

    /**
     * useQuery es para recoger peticiones get del store de la caché
     * useMutation es para guardarla, hacer post o patch
     */
    const { isLoading, data, isError } = useQuery(
        ['client', id],
        () => getClientByIdService(id),
        {
            retry: false, // para que no intente hacer rellamadas automáticas a la data si falla
            //cacheTime: 0 // para deshabilitar el caché y que siempre haga la petición
            /*onSuccess: loadedCard,*/
            /*onError(error: any) {
                console.log(error);
            },*/
        }
    );

    const clientMutation = useMutation( updateClientByIdService );
    const clientDeleteMutation = useMutation( () => deleteClientByIdService(id) );

    watch( data, () => {
            if (data.value) client.value = { ...data.value };
        },{
        immediate: true
    });

    //const queries = queryClient.getQueryCache().clear(); // limpia toda la data de la caché de TanStack
    //const queries = queryClient.getQueryCache().findAll(['client?page='], { exact: false }); // limpia la caché de un ID concreto
    //queries.forEach(query => query.fetch()); // vuelve a traer la data actualizada de donde la hemos limpiado

    return {
        // Properties
        client,
        clientMutation,
        clientDeleteMutation,
        isLoading,
        isError,
        // Getters
        // Methods
        updateClientOnSubmit: clientMutation.mutate,
        deleteClientOnSubmit: clientDeleteMutation.mutate,
        isUpdating: computed(() => clientMutation.isLoading.value),
        isUpdatingSuccessful: computed(() => clientMutation.isSuccess.value),
        isErrorUpdating: computed(() => clientMutation.isError.value),
    }
}
