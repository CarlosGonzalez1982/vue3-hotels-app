<script setup lang="ts">
import { ref } from 'vue';
import type { RouterLink } from '@/app/router/link-routes';
import IconPinia from '@/assets/img/icons/IconPinia.vue';
import ComboSelector from "@/app/components/shared-components/combo-selector/ComboSelector.vue";



interface Props {
    title: string;
    links: RouterLink[];
}
const props = defineProps<Props>();

const setResponsiveMenu = (element:any):void => {

    let { navBarId } = element.value.id;

    if (navBarId === 'topnav') {
        navBarId += 'responsive';
    } else {
        navBarId = 'topnav';
    }
};
</script>

<template>
    <header class="header__position--fixed header__border--line">
        <span class="web-app--version">{{ props.title }}</span>

        <div class="topnav" id="myTopnav" role="navigation">
            <div class="header__links-align">

                <IconPinia to="/"/>

                <RouterLink v-for="link of props.links"
                            :key="link.path"
                            :to="link.path">
                    {{ link.title }}
                </RouterLink>
            </div>

            <div class="header__links-align">

                <ComboSelector>
                    <template #option>
                        <option value="es" selected>Español</option>
                        <option value="en">English</option>
                    </template>
                </ComboSelector>

                <a href="javascript:void(0);" class="icon" @click="setResponsiveMenu">
                    <i class="fa fa-bars"></i>
                </a>
            </div>
        </div>
    </header>
</template>

<style src="./NavbarOptions.component.scss" lang="scss" scoped/>

