export class CreateUserModel {

    email: string = '';
    psswd: string = '';

    constructor( dataValue: any ) {

        if (dataValue) {

            this.email = dataValue.email;
            this.psswd = dataValue.psswd;
        }
    }
}
