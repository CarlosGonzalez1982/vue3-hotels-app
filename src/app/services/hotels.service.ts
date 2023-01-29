import type { GetHotelsListInterface } from '@/app/components/hotels-page/hotels-list/requestModel/getHotelsList.interface';
import { environment } from '@/environments/environment';


const endpoint = '/hotels';

export const getHotelsListService = async(): Promise<GetHotelsListInterface[]> => {

    try {

        /**
         * Ralentizamos 1 segundos la conexión para ver si funciona la visualización de caché
         * Comentar después del test
         */
        return new Promise((resolve) => {
            setTimeout(async () => {
                const { data } = await environment.get<GetHotelsListInterface[]>(`${ endpoint }`);
                resolve(data);
            }, 1000);
        });

        /**
         * Descomentar después del test
         */
        /*const { data } = await environment.get<GetClientsListInterface[]>(endpoint);
        return data;*/

    } catch ( error: any ) {
        throw new Error(error);
    }
}

export const getHotelByIdService = async(id: number): Promise<GetHotelsListInterface> => {

    try {
        const { data } = await environment.get<GetHotelsListInterface>(`${ endpoint }/${ id }`);
        /*const filterData = data.find( dataId => dataId.id === id )!;
        return filterData;*/
        return data;

    } catch ( error: any ) {
        console.error(`No se encontró hotel con el id ${ id }`);
        throw new Error(error);
    }
}
