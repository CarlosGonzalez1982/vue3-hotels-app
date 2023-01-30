enum Gender {
    Female = "female",
    Male = "male",
}

export class UpdateClientsListModel {

    address: string = '';
    age: number = 0;
    email: string = '';
    gender: Gender = Gender.Female;
    id: number = 0;
    isActive: boolean = false;
    name1111: string = '';
    phone: string = '';
    picture: string = '';

    constructor( dataValue: any ) {

        if (dataValue) {

            this.address = dataValue.address;
            this.name1111 = dataValue.name;
            this.age = dataValue.age;
            this.email = dataValue.email;
            this.gender = dataValue.gender;
            this.id = dataValue.id;
            this.isActive = dataValue.isActive;
            this.phone = dataValue.phone;
            this.picture = dataValue.picture;
        }
    }
}
