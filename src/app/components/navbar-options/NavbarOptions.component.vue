<script setup lang="ts">
import {computed, ref, toRef, watch} from 'vue';
import { useRouter } from 'vue-router';
import type { RouterLink } from '@/app/router/link-routes.router';
import IconPinia from '@/assets/img/icons/IconPinia.vue';
import LanguageSelector from '@/app/components/shared-components/combo-selector/LanguageSelector.component.vue';
import { useAuthStore } from '@/app/components/auth-page/store/auth.store';


interface Props {
    title?: string;
    links?: RouterLink[];
    submenu?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    title: '',
    submenu: false,
    links: () => []
});

const linksToShow = ref(props.links);
const { authStatus, authUserName, logout } = useAuthStore();
const router = useRouter();
const userName = ref(authUserName);

//console.log('auth',auth);
/*const navOptions = computed(() => linksToShow.value.filter(link => (link.name !== 'clients-page' && authStatus !== 'authenticated')));*/

/*watch(useAuthStore(), () => {
    console.log('authUserName.value',userName.value)    },{
    immediate: true
})*/

const onLogout = () => {
    router.push({ name: 'home-page'});
    logout();
}
// TODO: arreglar esta función
const setResponsiveMenu = (element:any) => {

    console.log('navbarId',element);
    //const navbarId = element.value.id;
    /*const navbarIdChange = ref(navbarId);

    if (navbarId === 'topnav') {
        navbarIdChange.value += 'responsive';
    } else {
        navbarIdChange.value = 'topnav';
    }

    return navbarIdChange;*/
};
</script>

<template>
    <header class="header__position--fixed header__border--line">
        <span class="web-app--version" v-if="props.title">{{ props.title }}</span>

        <div class="topnav" id="myTopnav" role="navigation">
            <div class="header__links--align">

                <IconPinia to="/" v-if="!props.submenu"/>

                <RouterLink v-for="{ path, title } of linksToShow"
                            :key="path"
                            :to="path">
                    {{ $t(title) }}
                </RouterLink>
            </div>

            <div class="header__links--align" v-if="!props.submenu">

                <a class="header__links--logout" href="javascript:void(0);" @click="onLogout">
                    Logout: {{ authUserName }} <i class="fa fa-sign-out" aria-hidden="true"></i>
                </a>

                <LanguageSelector/>

                <a href="javascript:void(0);" class="icon" @click="setResponsiveMenu">
                    <i class="fa fa-bars"></i>
                </a>
            </div>
        </div>
    </header>
</template>

<style src="./NavbarOptions.component.scss" lang="scss" scoped/>

