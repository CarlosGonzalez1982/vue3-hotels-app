<script setup lang="ts">
//import { RouterView } from 'vue-router'; // No parece necesario importarlo
import { routeLinks } from '@/app/router/link-routes.router';
import NavbarOptions from '@/app/components/navbar-options/NavbarOptions.component.vue';
</script>

<template>
    <NavbarOptions title="Pinia App Test" :links="routeLinks" :submenu="false"/>
    <main class="web-app--container">
        <RouterView/>
    </main>
</template>

<style lang="scss" src="./main.scss"/>
