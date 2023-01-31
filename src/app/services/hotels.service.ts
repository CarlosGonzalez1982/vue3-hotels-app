import { GetHotelsListModel } from '@/app/components/hotels-page/hotels-list/response-model/getHotelsList.model';
import { environment } from '@/environments/environment';
import { mapperResponseData } from '@/app/components/hotels-page/hotels-list/mapper/getHotelsList.mapper';

const endpoint = '/hotels';

export const getHotelsListService = async(): Promise<GetHotelsListModel[]> => {

    try {

        /**
         * Ralentizamos 1 segundos la conexión para ver si funciona la visualización de caché
         * Comentar después del test
         */
        return new Promise((resolve) => {
            setTimeout(async () => {
                let { data } = await environment.get<GetHotelsListModel[]>(`${ endpoint }`);
                data = mapperResponseData(data);
                resolve(data);
            }, 1000);
        });

        /**
         * Descomentar después del test
         */
        /*const { data } = await environment.get<GetHotelsListModel[]>(endpoint);
        return data;*/

    } catch ( error: any ) {
        throw new Error(error);
    }
}

export const getHotelByIdService = async(id: number): Promise<GetHotelsListModel> => {

    try {
        let { data } = await environment.get<GetHotelsListModel>(`${ endpoint }/${ id }`);
        data = new GetHotelsListModel(data);
        /*const filterData = data.find( dataId => dataId.id === id )!;
        return filterData;*/
        return data;

    } catch ( error: any ) {
        console.error(`No se encontró hotel con el id ${ id }`);
        throw new Error(error);
    }
}
