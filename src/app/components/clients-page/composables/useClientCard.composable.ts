import { computed, watch, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useQuery, useMutation, useQueryClient } from '@tanstack/vue-query';
import { getClientByIdService, updateClientByIdService } from '@/app/services/clients.service';
import type { GetClientsListInterface } from '@/app/components/clients-page/clients-list/requestModel/getClientsList.interface';


export const useClientCardComposable = (id: number) => {

    const client = ref<GetClientsListInterface>();

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
    //const queryClient = useQueryClient();

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
        isLoading,
        isError,
        // Getters
        // Methods
        updateClientOnSubmit: clientMutation.mutate,
        isUpdating: computed(() => clientMutation.isLoading.value),
        isUpdatingSuccessful: computed(() => clientMutation.isLoading.value),
        isErrorUpdating: computed(() => clientMutation.isError.value),
    }
}
