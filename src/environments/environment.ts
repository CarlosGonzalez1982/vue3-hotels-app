import axios from "axios";

export const environment = axios.create({
    baseURL: 'https://vue-demo-project-db-default-rtdb.europe-west1.firebasedatabase.app'
});
