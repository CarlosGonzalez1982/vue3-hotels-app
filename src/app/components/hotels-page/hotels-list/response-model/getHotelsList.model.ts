export class GetHotelsListModel {

    id: number = 0;
    category: number = 0;
    img: string = '';
    name: string = '';

    constructor( dataValue: any ) {

        if (dataValue) {

            this.id = dataValue.id;
            this.category = dataValue.category;
            this.img = dataValue.img;
            this.name = dataValue.name;
        }
    }
}
