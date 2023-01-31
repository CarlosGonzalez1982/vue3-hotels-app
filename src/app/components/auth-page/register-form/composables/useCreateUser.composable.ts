import { computed } from 'vue';
import { useMutation } from '@tanstack/vue-query';
import { createUserService } from '@/app/services/auth.service';


export const useCreateUserComposable = () => {

    const registerUser: any = {
        name: 'carlos',
        email: 'carlos@gmail.com',
        psswd: '1Pq0al2mS8'
    };

    const loginMutation = useMutation( createUserService );

    return {
        // Properties
        registerUser,
        loginMutation,
        // Getters
        // Methods
        createUserOnSubmit: loginMutation.mutate,
        isUpdating: computed(() => loginMutation.isLoading.value),
        isUpdatingSuccessful: computed(() => loginMutation.isSuccess.value),
        isErrorUpdating: computed(() => loginMutation.isError.value),
    }
}
