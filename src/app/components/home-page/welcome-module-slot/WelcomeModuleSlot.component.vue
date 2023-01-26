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

    <WelcomeItem>

        <template #icon>
            <EcosystemIcon/>
        </template>

        <template #heading>Ecosystem</template>

        Get official tools and libraries for your project:
        <a href="https://pinia.vuejs.org/" target="_blank" rel="noopener">Pinia</a>,
        <a href="https://router.vuejs.org/" target="_blank" rel="noopener">Vue Router</a>,
        <a href="https://test-utils.vuejs.org/" target="_blank" rel="noopener">Vue Test Utils</a>, and
        <a href="https://github.com/vuejs/devtools" target="_blank" rel="noopener">Vue Dev Tools</a>. If
        you need more resources, we suggest paying
        <a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">Awesome Vue</a>
        a visit.
    </WelcomeItem>

    <WelcomeItem>

        <template #icon>
            <CommunityIcon/>
        </template>

        <template #heading>Community</template>

        Got stuck? Ask your question on
        <a href="https://chat.vuejs.org" target="_blank" rel="noopener">Vue Land</a>, our official
        Discord server, or
        <a href="https://stackoverflow.com/questions/tagged/vue.js" target="_blank" rel="noopener"
        >StackOverflow</a
        >. You should also subscribe to
        <a href="https://news.vuejs.org" target="_blank" rel="noopener">our mailing list</a> and follow
        the official
        <a href="https://twitter.com/vuejs" target="_blank" rel="noopener">@vuejs</a>
        twitter account for latest news in the Vue world.
    </WelcomeItem>

    <WelcomeItem>

        <template #icon>
            <SupportIcon/>
        </template>

        <template #heading>Support Vue</template>

        As an independent project, Vue relies on community backing for its sustainability. You can help
        us by
        <a href="https://vuejs.org/sponsor/" target="_blank" rel="noopener">becoming a sponsor</a>.
    </WelcomeItem>
</template>
