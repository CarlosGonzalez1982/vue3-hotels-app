<script setup lang="ts">
import { toRef, watch } from 'vue';
import { useRouter } from 'vue-router';
import Swal from 'sweetalert2';
import { useAuthStore } from '@/app/components/auth-page/store/auth.store';
import { useLoginUserComposable } from '@/app/components/auth-page/login-form/composables/useLoginUser.composable';


const router = useRouter();
interface Props {
    logUser?: any;
}

const props = withDefaults(defineProps<Props>(), {
    logUser: () => ({
        email: '',
        psswd: ''
    })
});

const logUser = toRef(props, 'logUser');

const { loginUserOnSubmit, isUpdating, loginMutation } = useLoginUserComposable();

watch( loginMutation.isSuccess, () => {

    logUser.value.name = loginMutation.data.value.displayName;
    useAuthStore().setAuthParams(logUser.value, loginMutation.data.value.idToken, loginMutation.data.value.refreshToken, 'authenticated');

    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Login correcto',
        showConfirmButton: false,
        timer: 1500
    })
    router.push({ name: 'clients-list' });
});
</script>

<template>

    <span class="login100-form-title p-b-41">
      {{ $t('login.login.title') }}
    </span>

    <form class="login100-form validate-form p-b-33 p-t-5" @submit.prevent="loginUserOnSubmit(logUser)">

        <div class="wrap-input100 validate-input" :data-validate="$t('login.login.email')">
            <input class="input100" type="text" :placeholder="$t('login.login.email')" v-model="logUser.email" required>
            <span class="focus-input100" data-placeholder="&#xe818;"></span>
        </div>

        <div class="wrap-input100 validate-input" :data-validate="$t('login.login.password')">
            <input class="input100" type="password" :placeholder="$t('login.login.password')" v-model="logUser.psswd" required>
            <span class="focus-input100" data-placeholder="&#xe80f;"></span>
        </div>

        <div class="container-login100-form-btn m-t-32">
            <button type="submit" class="login100-form-btn" :disabled="isUpdating">
                {{ $t('login.login.button') }}
            </button>

        </div>

        <div class="container-login100-form-btn m-t-32">
            <router-link :to="{ name: 'register-form' }">{{ $t('login.login.account') }}</router-link>
        </div>
    </form>
</template>

<style src="./LoginForm.component.scss" lang="scss" scoped/>
