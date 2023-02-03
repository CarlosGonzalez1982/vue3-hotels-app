import { computed } from 'vue';
import { useMutation } from '@tanstack/vue-query';
import { createUserService } from '@/app/services/auth.service';


export const useCreateUserComposable = () => {

    const registerMutation = useMutation( createUserService );

    return {
        // Properties
        registerMutation,
        // Getters
        // Methods
        createUserOnSubmit: registerMutation.mutate,
        isUpdating: computed(() => registerMutation.isLoading.value),
        isUpdatingSuccessful: computed(() => registerMutation.isSuccess.value),
        isErrorUpdating: computed(() => registerMutation.isError.value),
    }
}
