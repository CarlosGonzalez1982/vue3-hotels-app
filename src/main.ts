import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from '@/app/router';

// TODO: Mejor colocarlo en el App.vue ¿no?
//import './_main.scss';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');
