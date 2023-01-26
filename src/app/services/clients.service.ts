import type { GetClientsListInterface } from "@/app/components/clients-page/clients-list/requestModel/getClientsList.interface";
import { environment } from '@/environments/environment';


const endpoint = '/clients.json';

export const getClientsListService = async(): Promise<GetClientsListInterface[]> => {

    try {

        /**
         * Ralentizamos 1 segundos la conexión para ver si funciona la visualización de caché
         * Comentar después del test
         */
        return new Promise((resolve) => {
            setTimeout(async () => {
                const { data } = await environment.get<GetClientsListInterface[]>(endpoint);
                resolve(data);
            }, 1000)
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

/*export const getHotelByIdService = async( id: number ): Promise<GetHotelsListInterface> => {

    try {
        const { data } = await environment.get<GetHotelsListInterface[]>(endpoint);
        const filterData = data.find( dataId => dataId.id === id )!;

        return filterData;

    } catch ( error: any ) {
        throw new Error(error);
        throw new Error(`No se encontró hotel con el id ${ id }`);
    }
}*/
