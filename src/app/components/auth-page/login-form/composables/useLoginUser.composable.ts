import { computed } from 'vue';
import { useMutation } from '@tanstack/vue-query';
import { loginUserService } from '@/app/services/auth.service';


export const useLoginUserComposable = () => {

    const loginMutation = useMutation( loginUserService );
    localStorage.setItem( 'testStorage', 'esto es una prueba' );
    return {
        // Properties
        loginMutation,
        // Getters
        // Methods
        loginUserOnSubmit: loginMutation.mutate,
        isUpdating: computed(() => loginMutation.isLoading.value),
        isUpdatingSuccessful: computed(() => loginMutation.isSuccess.value),
        isErrorUpdating: computed(() => loginMutation.isError.value),
    }
}
