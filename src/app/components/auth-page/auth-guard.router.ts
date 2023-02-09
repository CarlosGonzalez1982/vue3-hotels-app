import { useAuthStore } from '@/app/components/auth-page/store/auth.store';
import { checkAuthentication } from "@/app/services/auth.service";


export const isAuthenticatedGuard = async( to:any, from:any, next:any) => {

    await checkAuthentication();
    const userStatus = useAuthStore().authStatus;
    console.log('userStatus/////', userStatus);
    if (userStatus === 'authenticated'){
        next();
    } else {
        next({ name: 'login-form'});
    }
}
