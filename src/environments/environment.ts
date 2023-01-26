import axios from "axios";

export const environment = axios.create({
    baseURL: import.meta.env.VITE_API_DEV_URL //para leer la variable de entorno de .env
});
