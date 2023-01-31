export class CreateUserModel {

    name: string = '';
    email: string = '';
    password: string = '';

    constructor( dataValue: any ) {

        if (dataValue) {

            this.name = dataValue.name;
            this.email = dataValue.email;
            this.password = dataValue.psswd;
        }
    }
}
