enum Gender {
    Female = "female",
    Male = "male",
}

export class GetClientsListModel {

    address: string = '';
    age: number = 0;
    email: string = '';
    gender: Gender = Gender.Female;
    id: number = 0;
    isActive: boolean = false;
    name: string = '';
    phone: string = '';
    picture: string = '';

    constructor( dataValue: any ) {

        if (dataValue) {

            this.address = dataValue.address;
            this.age = dataValue.age;
            this.email = dataValue.email;
            this.gender = dataValue.gender;
            this.id = dataValue.id;
            this.isActive = dataValue.isActive;
            this.name = dataValue.name;
            this.phone = dataValue.phone;
            this.picture = dataValue.picture;
        }
    }
}
