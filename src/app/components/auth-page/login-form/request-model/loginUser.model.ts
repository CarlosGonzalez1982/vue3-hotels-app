export class LoginUserModel {

    email: string = '';
    password: string = '';

    constructor( dataValue: any ) {

        if (dataValue) {

            this.email = dataValue.email;
            this.password = dataValue.psswd;
        }
    }
}
