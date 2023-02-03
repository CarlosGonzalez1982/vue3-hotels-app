<script setup lang="ts">
import { computed, ref, toRef, watch } from 'vue';
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
const router = useRouter();

const status = computed(() => useAuthStore().authStatus);
const userName = computed(() => useAuthStore().authUserName);
const { logout } = useAuthStore();
const navOptions = computed(() => linksToShow.value.filter( link =>
    (link.name !== 'clients-page' && status.value !== 'authenticated') ||
    (link.name !== 'auth-page' && status.value === 'authenticated')));

const onLogout = () => {
    router.push({ name: 'home-page'});
    logout();
}
</script>

<template>
    <header class="header__position--fixed header__border--line">
        <span class="web-app--version" v-if="props.title">{{ props.title }}</span>

        <div class="topnav" id="myTopnav" role="navigation">
            <div class="header__links--align">

                <IconPinia to="/" v-if="!props.submenu"/>

                <RouterLink v-for="{ path, title } of navOptions"
                            :key="path"
                            :to="path">
                    {{ $t(title) }}
                </RouterLink>
            </div>

            <div class="header__links--align" v-if="!props.submenu">

                <a class="header__links--logout" v-if="status === 'authenticated'" href="javascript:void(0);" @click="onLogout">
                    Logout <i class="fa fa-sign-out" aria-hidden="true"></i><br class="carry--return"> {{ userName }}
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

