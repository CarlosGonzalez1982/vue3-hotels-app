<script setup lang="ts">
import type { RouterLink } from '@/app/router/link-routes.router';
import IconPinia from '@/assets/img/icons/IconPinia.vue';
import LanguageSelector from '@/app/components/shared-components/combo-selector/LanguageSelector.component.vue';

interface Props {
    title?: string;
    links?: RouterLink[];
    submenu?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
    submenu: false,
    links: () => []
});

// TODO: arreglar esta función
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
        <span class="web-app--version" v-if="props.title">{{ props.title }}</span>

        <div class="topnav" id="myTopnav" role="navigation">
            <div class="header__links-align">

                <IconPinia to="/" v-if="!props.submenu"/>

                <RouterLink v-for="link of props.links"
                            :key="link.path"
                            :to="link.path">
                    {{ $t(link.title) }}
                </RouterLink>
            </div>

            <div class="header__links-align" v-if="!props.submenu">

                <LanguageSelector/>

                <a href="javascript:void(0);" class="icon" @click="setResponsiveMenu">
                    <i class="fa fa-bars"></i>
                </a>
            </div>
        </div>
    </header>
</template>

<style src="./NavbarOptions.component.scss" lang="scss" scoped/>

