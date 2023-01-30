<template>

    <span class="login100-form-title p-b-41">
      {{ $t('login.login.title') }}
    </span>

    <form class="login100-form validate-form p-b-33 p-t-5">

        <div class="wrap-input100 validate-input" :data-validate="$t('login.login.email')">
            <input class="input100" type="text" :placeholder="$t('login.login.email')" required>
            <span class="focus-input100" data-placeholder="&#xe82a;"></span>
        </div>

        <div class="wrap-input100 validate-input" :data-validate="$t('login.login.password')">
            <input class="input100" type="password" :placeholder="$t('login.login.password')" required>
            <span class="focus-input100" data-placeholder="&#xe80f;"></span>
        </div>

        <div class="container-login100-form-btn m-t-32">
            <button class="login100-form-btn">
                {{ $t('login.login.button') }}
            </button>

        </div>

        <div class="container-login100-form-btn m-t-32">
            <router-link :to="{ name: 'register-form' }">{{ $t('login.login.account') }}</router-link>
        </div>
    </form>
</template>

<style src="./LoginForm.component.scss" lang="scss" scoped/>
