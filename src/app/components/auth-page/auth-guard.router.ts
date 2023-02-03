import { useAuthStore } from '@/app/components/auth-page/store/auth.store';


export const isAuthenticatedGuard = async( to:any, from:any, next:any) => {

    const userStatus = useAuthStore().authStatus;

    if (userStatus === 'authenticated'){
        next();
    } else {
        next({ name: 'login-form'});
    }
}
