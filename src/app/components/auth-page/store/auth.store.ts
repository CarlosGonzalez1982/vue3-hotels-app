import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', () => {

    const authStatus = ref<string>('authenticating'); // 'authenticating', 'authenticated', 'not-authenticated'
    const authUser = ref<object | null>(null);
    const authIdToken = ref<string | null>(null);
    const authRefreshToken = ref<string | null>(null);

    return {
        // State properties
        authStatus,
        authUser,
        authIdToken,
        authRefreshToken,
        // Getters
        // Actions
        setAuthParams(user: object, idToken: string, refreshToken: string, userStatus: string) {
            authStatus.value = userStatus;
            authUser.value = user;
            authIdToken.value = idToken;
            authRefreshToken.value = refreshToken;
        }
    };
})
