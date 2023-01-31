export class UpdateClientsListModel {

    address: string = '';
    name1111: string = '';
    id: number = 0;

    constructor( dataValue: any ) {

        if (dataValue) {

            this.address = dataValue.address;
            this.name1111 = dataValue.name;
            this.id = dataValue.id;
        }
    }
}
