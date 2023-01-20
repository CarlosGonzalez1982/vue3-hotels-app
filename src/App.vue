<script setup lang="ts">
import {RouterLink, RouterView} from 'vue-router';
import HelloWorld from '@/app/components/dashboard/HelloWorld.component.vue';
</script>

<template>
    <header>
        <img alt="Vue logo" class="logo" src="@/assets/img/icons/logoVue.svg" width="125" height="125"/>
        <div class="wrapper">
            <HelloWorld msg="You did it!"/>
            <nav>
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/about">About</RouterLink>
            </nav>
        </div>
    </header>

    <RouterView/>
</template>

<style lang="scss" src="./main.scss"/>
