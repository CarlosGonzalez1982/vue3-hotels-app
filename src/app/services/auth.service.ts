import Swal from 'sweetalert2';
import { useRouter } from "vue-router";
import { authAPI } from '@/environments/authAPI';
import { CreateUserModel } from '@/app/components/auth-page/register-form/request-model/createUser.model';
import { useAuthStore } from '@/app/components/auth-page/store/auth.store';

const router = useRouter();
const endpoint = ':signUp';
const endpointUpdate = ':update';

export const createUserService = async (user: any): Promise<any> => {

    const dataToSend = new CreateUserModel(user);
    const { name, email, password } = dataToSend;

    try {

        const { data } = await authAPI.post<any>(`${ endpoint }`, { email, password, returnSecureToken: true });
        const { idToken, refreshToken } = data;

        await authAPI.post(`${ endpointUpdate }`, { displayName: name, idToken });

        delete user.psswd;
        useAuthStore().setAuthParams(user, idToken, refreshToken, 'authenticated');

        return { ok: true };

    } catch (error: any) {

        console.error(`Error al guardar el nuevo usuario ${ user.name }`);
        await Swal.fire('Error', error.response.data.error.message, 'error');
        return { ok: false, message: error.response.data.error.message };
        //throw new Error(error.response.data.error.message);
    }
}
