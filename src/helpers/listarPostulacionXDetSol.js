import {urlApi} from './url';
import axios from 'axios';

export const listarPostulacionXDetSol = async(idDetSol) => {

    try{
        const fetch = await axios({
            method : 'GET',
            url : `${urlApi}/api/postulacion/${idDetSol}`
        });

        const {data} = fetch;

        return data;
    }catch(error){
        return error;
    }
}
