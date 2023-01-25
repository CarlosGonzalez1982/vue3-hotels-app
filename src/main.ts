import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { VueQueryPlugin } from "@tanstack/vue-query";
import { i18n } from './i18n';
import App from './App.vue';
import router from '@/app/router/index.router';

const app = createApp(App);

app.use(createPinia());
app.use(VueQueryPlugin)
app.use(router);
app.use(i18n);
app.mount('#app');
