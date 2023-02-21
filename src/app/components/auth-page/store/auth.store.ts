import { computed, ref } from 'vue';
import { defineStore } from 'pinia';

export const useAuthStore:any = defineStore('auth', () => {

    const authStatus = ref<string>('authenticating'); // 'authenticating', 'authenticated', 'not-authenticated'
    const authUser = ref<any | null>(null);
    const authIdToken = ref<string | null>(null);
    const authRefreshToken = ref<string | null>(null);

    const logout = () => {
        useAuthStore().setAuthParams(null, null, null, 'not-authenticated');
        sessionStorage.removeItem('idToken')
        sessionStorage.removeItem('refreshToken')
    };

    return {
        // State properties
        authStatus,
        authUser,
        authIdToken,
        authRefreshToken,
        logout,
        // Getters
        // Actions
        setAuthParams(user: any|null, idToken: string|null, refreshToken: string|null, userStatus: string) {
            authStatus.value = userStatus;
            authUser.value = user;
            authIdToken.value = idToken;
            authRefreshToken.value = refreshToken;
        },
        authUserName: computed(() => authUser.value?.name),
    };
})
