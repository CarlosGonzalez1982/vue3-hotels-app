<script setup lang="ts">
import WelcomeItem from '@/app/components/shared-components/welcome-item/WelcomeItem.component.vue';
import DocumentationIcon from '@/assets/img/icons/IconDocumentation.vue';
import ToolingIcon from '@/assets/img/icons/IconTooling.vue';
import EcosystemIcon from '@/assets/img/icons/IconEcosystem.vue';
import CommunityIcon from '@/assets/img/icons/IconCommunity.vue';
import SupportIcon from '@/assets/img/icons/IconSupport.vue';
</script>

<template>
    <WelcomeItem>
        <template #icon>
            <DocumentationIcon/>
        </template>

        <template #heading>{{ $t("home.title1") }}</template>
        <p v-html="$t('home.text1')"></p>
    </WelcomeItem>

    <WelcomeItem>

        <template #icon>
            <ToolingIcon/>
        </template>

        <template #heading>{{ $t("home.title2") }}</template>
        <p v-html="$t('home.text2')"></p>
    </WelcomeItem>
</template>
