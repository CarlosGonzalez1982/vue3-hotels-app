<script setup lang="ts"/>

<template>
    <div class="locale-changer">
        <select v-model="$i18n.locale">
            <option v-for="(lang, index) in langs" :key="`Lang${index}`" :value="lang.code">
                {{ lang.text }}
            </option>
        </select>
    </div>
</template>

<script>
export default {
    name: "locale-changer",
    data() {
        return {
            langs: [
                { code: "es", text: "Español" },
                { code: "en", text: "English" },
            ],
        };
    },
};
</script>

<style src="./LanguageSelector.component.scss" lang="scss" scoped/>
