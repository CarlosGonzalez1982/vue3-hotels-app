import { computed } from 'vue';
import { useMutation } from '@tanstack/vue-query';
import { createUserService } from '@/app/services/auth.service';
import { createClientService } from '@/app/services/clients.service';


export const useCreateUserComposable = () => {

    const registerMutation = useMutation( createUserService );
    const registerMutationInMockDB = useMutation( createClientService );

    return {
        // Properties
        registerMutation,
        registerMutationInMockDB,
        // Getters
        // Methods
        createUserOnSubmit: registerMutation.mutate,
        createUserOnSubmitInMockDB: registerMutationInMockDB.mutate,
        isUpdating: computed(() => registerMutation.isLoading.value),
        isUpdatingSuccessful: computed(() => registerMutation.isSuccess.value),
        isErrorUpdating: computed(() => registerMutation.isError.value),
    }
}
