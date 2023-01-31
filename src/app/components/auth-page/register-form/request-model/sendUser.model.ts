export class SendUserModel {

    name: string = '';
    email: string = '';
    psswd: number = 0;

    constructor( dataValue: any ) {

        if (dataValue) {

            this.name = dataValue.name;
            this.email = dataValue.email;
            this.psswd = dataValue.psswd;
        }
    }
}
