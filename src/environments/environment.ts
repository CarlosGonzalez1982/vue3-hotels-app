import axios from 'axios';

const environment = axios.create({
    baseURL: import.meta.env.VITE_API_DEV_URL //para leer la variable de entorno de .env
});

environment.interceptors.request.use( (config) => {

    const authIdToken = localStorage.getItem('idToken');

    config.params = {
        auth: authIdToken
    }

    return config;
});

export default environment;
