<template>

    <span class="login100-form-title p-b-41">
      {{ $t('login.register.title') }}
    </span>

    <form class="login100-form validate-form p-b-33 p-t-5">

        <div class="wrap-input100 validate-input" :data-validate="$t('login.register.name')">
            <input class="input100" type="text" :placeholder="$t('login.register.name')" required>
            <span class="focus-input100" data-placeholder="&#xe82a;"></span>
        </div>

        <div class="wrap-input100 validate-input" :data-validate="$t('login.register.email')">
            <input class="input100" type="password" :placeholder="$t('login.register.email')" required>
            <span class="focus-input100" data-placeholder="&#xe818;"></span>
        </div>

        <div class="wrap-input100 validate-input" :data-validate="$t('login.register.password')">
            <input class="input100" type="password" :placeholder="$t('login.register.password')" required>
            <span class="focus-input100" data-placeholder="&#xe80f;"></span>
        </div>

        <div class="container-login100-form-btn m-t-32">
            <button class="login100-form-btn">
                {{ $t("login.register.button") }}
            </button>
        </div>

        <div class="container-login100-form-btn m-t-32">
            <router-link :to="{ name: 'login-form' }">{{ $t("login.register.account") }}</router-link>
        </div>
    </form>

</template>

<style src="./RegisterForm.component.scss" lang="scss" scoped/>
