<script setup lang="ts">
import NavbarOptions from '@/app/components/navbar-options/NavbarOptions.component.vue';
//import { RouterView } from 'vue-router'; // No parece necesario importarlo
import { hotelsRoute } from '@/app/components/hotels-page/index.router';
import type { RouterLink } from '@/app/router/link-routes.router';

const routeLinks: RouterLink[] = hotelsRoute.children!
    .filter( route => (route.props as { visible: boolean }).visible)
    .map( route => {

        return {
            name: route.name as string,
            path: route.path,
            title: (route.props as { title: string, visible: boolean }).title
        }
    }
);
</script>

<template>
    <!--<h1>This is a hotels page</h1>-->
    <NavbarOptions :links="routeLinks" :submenu="true"/>
    <RouterView/>
</template>

<style src="./HotelsPage.component.scss" lang="scss" scoped/>
