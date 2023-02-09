<script setup lang="ts">
//import { RouterView } from 'vue-router'; // No parece necesario importarlo
import { routeLinks } from '@/app/router/link-routes.router';
import NavbarOptions from '@/app/components/navbar-options/NavbarOptions.component.vue';
import { checkAuthentication } from '@/app/services/auth.service';
//import { useAuthStore } from '@/app/components/auth-page/store/auth.store';

//const authStatus = useAuthStore().authStatus;
checkAuthentication();
</script>

<template>

    <!--<h1 v-if="authStatus === 'authenticating'" >{{ authStatus }}</h1>

    <template v-else>-->
        <NavbarOptions title="Pinia App Test" :links="routeLinks" :submenu="false"/>
        <main class="web-app--container">
            <RouterView/>
        </main>
    <!--</template>-->
</template>

<style lang="scss" src="./main.scss"/>
