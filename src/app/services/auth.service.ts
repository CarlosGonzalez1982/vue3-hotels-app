import Swal from 'sweetalert2';
import { authAPI } from '@/environments/authAPI';
import { CreateUserModel } from '@/app/components/auth-page/register-form/request-model/createUser.model';
import { LoginUserModel } from '@/app/components/auth-page/login-form/request-model/loginUser.model';
import { useAuthStore } from '@/app/stores/auth.store';
import router from "@/app/router/index.router";

const endpointCreate = ':signUp';
const endpointUpdate = ':update';
const endpointLogin = ':signInWithPassword';
const endpointCheckAuth = ':lookup';

export const createUserService = async (user: any): Promise<any> => {

    const dataToSend = new CreateUserModel(user);
    const { name, email, password } = dataToSend;

    try {

        const { data } = await authAPI.post<any>(`${ endpointCreate }`, { email, password, returnSecureToken: true });
        const { idToken } = data;
        await authAPI.post<any>(`${ endpointUpdate }`, { displayName: name, idToken });

        //console.log('data', data);
        return data;

    } catch (error: any) {

        console.error(`Error al guardar el nuevo usuario: ${ user.name }`);
        await Swal.fire('Error', error.response.data.error.message, 'error');
        //return { ok: false, message: error.response.data.error.message };
        throw new Error(error.response.data.error.message);
    }
}

export const loginUserService = async (user: any): Promise<any> => {

    const dataToSend = new LoginUserModel(user);
    const { email, password } = dataToSend;

    try {

        const { data } = await authAPI.post<any>(`${ endpointLogin }`, { email, password, returnSecureToken: true });
        const { idToken, refreshToken } = data;
        sessionStorage.setItem( 'idToken', idToken );
        sessionStorage.setItem( 'refreshToken', refreshToken );
        //console.log('data', data);

        return data;

    } catch (error: any) {

        console.error(`Error al loggear el usuario: ${ user.name }`);
        await Swal.fire('Error', error.response.data.error.message, 'error');
        //return { ok: false, message: error.response.data.error.message };
        throw new Error(error.response.data.error.message);
    }
}

export const checkAuthentication = async (): Promise<any> => {

    const idToken = sessionStorage.getItem('idToken');
    const refreshToken = sessionStorage.getItem('refreshToken');

    if( !idToken ) {
        useAuthStore().setAuthParams(null, null, null, 'not-authenticated');
        useAuthStore().logout();
        console.error(`Error de token`);
        /*await Swal.fire('Error', 'Error de token', 'error');
        throw new Error('Error de token');*/
        return ;
    }

    try {

        const { data } = await authAPI.post<any>(`${ endpointCheckAuth }`, { idToken });
        console.log('data checkAuthentication/////', data);
        const { displayName, email } = data.users[0];
        const user = {
            name: displayName,
            email
        }
        useAuthStore().setAuthParams(user, idToken, refreshToken, 'authenticated');

        return data;

    } catch (error: any) {

        useAuthStore().logout();
        await router.push({name: 'home-page'});
        console.error(`Error de autentificación: ${ error.response.data.error.message }`);
        await Swal.fire('Error', error.response.data.error.message, 'error');
        //return { ok: false, message: error.response.data.error.message };
        throw new Error(error.response.data.error.message);
    }
}
