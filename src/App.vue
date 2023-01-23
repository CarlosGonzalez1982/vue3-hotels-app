<script setup lang="ts">
import { RouterView } from 'vue-router';
import { routeLinks } from '@/app/router/link-routes';
import NavbarOptions from '@/app/components/navbar-options/NavbarOptions.component.vue';
</script>

<template>
    <NavbarOptions title="Pinia App Test" :links="routeLinks"/>
    <main class="web-app--container">
        <RouterView/>
    </main>
</template>

<style lang="scss" src="./main.scss"/>
