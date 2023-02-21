import axios from 'axios';

const environment = axios.create({
    baseURL: import.meta.env.VITE_API_DEV_URL //para leer la variable de entorno de .env
});

/**
 * Cada vez que se hace una petición, envía el token a través del interceptor
 */
environment.interceptors.request.use( (config) => {

    const authIdToken = sessionStorage.getItem('idToken');

    config.params = {
        auth: authIdToken
    }

    return config;
});

export default environment;
