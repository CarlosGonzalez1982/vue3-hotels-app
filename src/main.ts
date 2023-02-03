import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { VueQueryPlugin } from '@tanstack/vue-query';
import { i18n } from './i18n';
import App from './App.vue';
import router from '@/app/router/index.router';

const app = createApp(App);

VueQueryPlugin.install(app, {
    queryClientConfig: {
        defaultOptions: {
            queries: {
                cacheTime: 1000 * 60, //durante 1 minuto los datos se cargan de caché y no del servicio (para acelerar la vista)
                refetchOnReconnect: 'always' //si nos quedamos sin conexión y tiramos de caché, al volver la conexión lanza la petición para actualizar datos
            }
        }
    }
})
app.use(createPinia());
app.use(router);
app.use(i18n);
app.mount('#app');
