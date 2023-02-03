import { GetHotelsListModel } from '@/app/components/hotels-page/hotels-list/response-model/getHotelsList.model';

export const mapperResponseData = ( dataToMapper: any ) => {

    const responseArray = [];

    for (const data of dataToMapper) {
        responseArray.push(new GetHotelsListModel(data));
    }

    return responseArray;
}

