import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { i18n } from './i18n';
import App from './App.vue';
import router from '@/app/router';

// TODO: Mejor colocarlo en el App.vue o aquí??
//import './main.scss';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(i18n);
app.mount('#app');
