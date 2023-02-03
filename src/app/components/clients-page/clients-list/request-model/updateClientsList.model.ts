export class UpdateClientsListModel {

    address: string = '';
    name: string = '';
    id: number = 0;

    constructor( dataValue: any ) {

        if (dataValue) {

            this.address = dataValue.address;
            this.name = dataValue.name;
            this.id = dataValue.id;
        }
    }
}
