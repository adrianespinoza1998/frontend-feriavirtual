import {urlApi} from './url';
import axios from 'axios';

export const listarPostulacionXSolProd = async(id) => {

    try{
        const fetch = await axios({
            method : 'GET',
            url : `${urlApi}/api/postulacion/sol-prod/${id}`
        });

        const {data} = fetch;

        return data;
    }catch(error){
        return error;
    }
}
