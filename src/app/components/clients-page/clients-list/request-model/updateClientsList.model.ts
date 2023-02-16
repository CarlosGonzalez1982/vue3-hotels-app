export class UpdateClientsListModel {

    address: string = '';
    name: string = '';
    id: number = 0;
    age?: number = 0;
    email?: string = '';
    gender?: string = '';
    phone?: string = '';

    constructor( dataValue: any ) {

        if (dataValue) {

            this.address = dataValue.address;
            this.name = dataValue.name;
            this.id = dataValue.id;
            this.age = dataValue.age;
            this.email = dataValue.email;
            this.gender = dataValue.gender;
            this.phone = dataValue.phone;
        }
    }
}

 //"picture": "https://via.placeholder.com/150"
