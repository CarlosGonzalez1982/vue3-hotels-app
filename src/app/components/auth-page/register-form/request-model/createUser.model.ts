export class CreateUserModel {

    name: string = '';
    email: string = '';
    password: string = '';
    address: string = '';
    age: number = 0;
    gender: string = '';
    //id: number = 0;
    isActive: boolean = false;
    phone: string = '';
    picture: string = '';
    eyeColor: string = '';

    constructor( dataValue: any ) {

        if (dataValue) {

            this.name = dataValue.name;
            this.email = dataValue.email;
            this.password = dataValue.psswd;
            this.address = dataValue.address || '801 Stratford Road, Rose, Kentucky, 7989';
            this.age = dataValue.age || 25;
            this.gender = dataValue.gender || 'female';
            //this.id = dataValue.id|| 50;
            this.isActive = dataValue.isActive || false;
            this.phone = dataValue.phone || '+34 620589226';
            this.picture = dataValue.picture || 'https://via.placeholder.com/150';
            this.eyeColor = dataValue.eyeColor || 'green';
        }
    }
}
