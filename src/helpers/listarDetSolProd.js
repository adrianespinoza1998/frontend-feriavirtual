import {urlApi} from './url';
import axios from 'axios';

export const listarDetSolProd = async(idSolProd = 0) => {
    try{
        const fetch = await axios({
            method : 'GET',
            url : `${urlApi}/api/det-sol-prod/sol/${idSolProd}`
        });

        const {data} = fetch;

        return data;
    }catch(error){
        return error;
    }
}
