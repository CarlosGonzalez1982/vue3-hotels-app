import { GetClientsListModel } from "@/app/components/clients-page/clients-list/response-model/getClientsList.model";

export const mapperResponseData = ( dataToMapper: any ) => {

    const responseArray = [];

    for (const data of dataToMapper) {
        responseArray.push(new GetClientsListModel(data));
    }

    return responseArray;
}

