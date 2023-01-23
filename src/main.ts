import { createApp } from 'vue';
import { createPinia } from 'pinia';
//import { locales } from '@/locales';
import App from './App.vue';
import router from '@/app/router';

// TODO: Mejor colocarlo en el App.vue o aquí??
//import './main.scss';

const app = createApp(App);

app.use(createPinia());
app.use(router);
//app.use(locales);
app.mount('#app');
