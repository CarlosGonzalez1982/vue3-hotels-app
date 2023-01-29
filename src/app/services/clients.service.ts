import type { GetClientsListInterface } from "@/app/components/clients-page/clients-list/requestModel/getClientsList.interface";
import { environment } from '@/environments/environment';


const endpoint = '/clients';

export const getClientsListService = async (page: number): Promise<GetClientsListInterface[]> => {

    try {

        /**
         * Ralentizamos 1 segundos la conexión para ver si funciona la visualización de caché
         * Comentar después del test
         */
        return new Promise((resolve) => {
            setTimeout(async () => {
                const { data } = await environment.get<GetClientsListInterface[]>(`${ endpoint }?_page=${ page }`);
                resolve(data);
            }, 3000);
        });

        /**
         * Descomentar después del test
         */
        /*const { data } = await environment.get<GetClientsListInterface[]>(endpoint);
        return data;*/

    } catch (error: any) {
        console.error(`No se encontró el listado: Parámetro --> ${ page }`);
        throw new Error(error);
    }
}

export const getClientByIdService = async (id: number): Promise<GetClientsListInterface> => {

    try {

        const {data} = await environment.get<GetClientsListInterface>(`${ endpoint }/${ id }`);
        /*const filterData = data.find( dataId => dataId.id === id )!;
        return filterData;*/
        return data;

    } catch (error: any) {

        console.error(`No se encontró cliente con el id ${id}`);
        throw new Error(error);
    }
}

export const updateClientByIdService = async (client: GetClientsListInterface): Promise<GetClientsListInterface> => {

    try {

        return new Promise((resolve) => {
            setTimeout(async () => {
                const { data } = await environment.patch<GetClientsListInterface>(`${ endpoint }/${ client.id }`, client);
                resolve(data);
            }, 1000);
        });

        /*const { data } = await environment.patch<GetClientsListInterface>(`${ endpoint }/${ client.id }`, client);
        return data;*/

    } catch (error: any) {

        console.error(`No se pudieron guardar los cambios al cliente con id ${ client.id }`);
        throw new Error(error);
    }
}
