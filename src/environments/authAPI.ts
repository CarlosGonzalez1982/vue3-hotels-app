import axios from 'axios';


export const authAPI = axios.create({
    baseURL: import.meta.env.VITE_API_REGISTER_URL, //para leer la variable de entorno de .env
    params: {
        key: 'AIzaSyD_1skEe-n5RWXWKBXzA6rDO-E5mmnHwoI'
    }
});
