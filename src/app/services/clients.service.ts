import environment from '@/environments/environment';
import { GetClientsListModel } from '@/app/components/clients-page/clients-list/response-model/getClientsList.model';
import { UpdateClientsListModel } from '@/app/components/clients-page/clients-list/request-model/updateClientsList.model';
import { mapperResponseData } from '@/app/components/clients-page/clients-list/mapper/getClientsList.mapper';
import { CreateUserModel } from '@/app/components/auth-page/register-form/request-model/createUser.model';


const endpoint = '/clients';

export const getClientsListService = async (page: number): Promise<GetClientsListModel[]> => {

    try {

        /**
         * Ralentizamos 3 segundos la conexión para ver si funciona la visualización de caché
         * Comentar después del test
         */
        return new Promise((resolve) => {
            setTimeout(async () => {
                let { data } = await environment.get<GetClientsListModel[]>(`${ endpoint }?_page=${ page }`);
                data = mapperResponseData(data);
                resolve(data);
            }, 3000);
        });

        /**
         * Descomentar después del test
         */
        /*const { data } = await environment.get<GetClientsListModel[]>(endpoint);
        return data;*/

    } catch (error: any) {
        console.error(`No se encontró el listado: Parámetro --> ${ page }`);
        throw new Error(error);
    }
}

export const getClientByIdService = async (id: number): Promise<GetClientsListModel> => {

    try {

        let { data } = await environment.get<GetClientsListModel>(`${ endpoint }/${ id }`);
        data = new GetClientsListModel(data);
        /*const filterData = data.find( (dataId:any) => dataId.id === id )!;
        return filterData;*/
        return data;

    } catch (error: any) {

        console.error(`No se encontró cliente con el id ${id}`);
        throw new Error(error);
    }
}

export const createClientService = async (client: CreateUserModel): Promise<CreateUserModel> => {

    try {

        const dataToSend = new CreateUserModel(client);

        const { data } = await environment.post<CreateUserModel>(`${ endpoint }/`, dataToSend);
        //console.log('data to save', data);
        return data;

    } catch (error: any) {

        console.error(`No se pudo registrar al nuevo cliente: ${ client.name }`);
        throw new Error(error);
    }
}

export const updateClientByIdService = async (client: UpdateClientsListModel): Promise<UpdateClientsListModel> => {

    try {

        const dataToSend = new UpdateClientsListModel(client);

        /**
         * Ralentizamos 1 segundo la conexión para ver si funciona la visualización de caché
         * Comentar después del test
         */
        return new Promise((resolve) => {
            setTimeout(async () => {
                const { data } = await environment.patch<UpdateClientsListModel>(`${ endpoint }/${ dataToSend.id }`, dataToSend);
                resolve(data);
            }, 1000);
        });

        /*const { data } = await environment.patch<UpdateClientsListModel>(`${ endpoint }/${ client.id }`, client);
        return data;*/

    } catch (error: any) {

        console.error(`No se pudieron guardar los cambios al cliente con id ${ client.id }`);
        throw new Error(error);
    }
}

export const deleteClientByIdService = async (id: number): Promise<any> => {

    try {

        const { data } = await environment.delete<any>(`${ endpoint }/${ id }`);
        console.log('remove data', data);
        return data;

    } catch (error: any) {

        console.error(`No se pudo eliminar al cliente con id ${ id }`);
        throw new Error(error);
    }
}
