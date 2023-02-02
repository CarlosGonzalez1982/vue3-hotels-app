<script setup lang="ts">
import { toRef, watch } from "vue";
import { useRouter } from "vue-router";
import Swal from "sweetalert2";
import { useCreateUserComposable } from "@/app/components/auth-page/register-form/composables/useCreateUser.composable";
import { useAuthStore } from "@/app/components/auth-page/store/auth.store";


const router = useRouter();
interface Props {
    regUser?: any;
}

const props = withDefaults(defineProps<Props>(), {
    regUser: () => ({
        name: '',
        email: '',
        psswd: ''
    })
});

const regUser = toRef(props, 'regUser');

const { createUserOnSubmit, isUpdating, loginMutation } = useCreateUserComposable();

watch( loginMutation.isSuccess, () => {

    delete regUser.value.psswd;
    useAuthStore().setAuthParams(regUser.value, loginMutation.data.value.idToken, loginMutation.data.value.refreshToken, 'authenticated');

    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Usuario registrado',
        showConfirmButton: false,
        timer: 1500
    })
    router.push({ name: 'clients-list' });
});
</script>

<template>

    <span class="login100-form-title p-b-41">
      {{ $t('login.register.title') }}
    </span>

    <h3 v-if="isUpdating">Registrando...</h3>

    <form class="login100-form validate-form p-b-33 p-t-5" @submit.prevent="createUserOnSubmit(regUser)" >

        <div class="wrap-input100 validate-input" :data-validate="$t('login.register.name')">
            <input class="input100" type="text" :placeholder="$t('login.register.name')" v-model="regUser.name" required>
            <span class="focus-input100" data-placeholder="&#xe82a;"></span>
        </div>

        <div class="wrap-input100 validate-input" :data-validate="$t('login.register.email')">
            <input class="input100" type="email" :placeholder="$t('login.register.email')" v-model="regUser.email" required>
            <span class="focus-input100" data-placeholder="&#xe818;"></span>
        </div>

        <div class="wrap-input100 validate-input" :data-validate="$t('login.register.password')">
            <input class="input100" type="password" :placeholder="$t('login.register.password')" v-model="regUser.psswd" required>
            <span class="focus-input100" data-placeholder="&#xe80f;"></span>
        </div>

        <div class="container-login100-form-btn m-t-32">
            <button type="submit" class="login100-form-btn" :disabled="isUpdating">
                {{ $t("login.register.button") }}
            </button>
        </div>

        <div class="container-login100-form-btn m-t-32">
            <router-link :to="{ name: 'login-form' }">{{ $t("login.register.account") }}</router-link>
        </div>
    </form>

</template>

<style src="./RegisterForm.component.scss" lang="scss" scoped/>
