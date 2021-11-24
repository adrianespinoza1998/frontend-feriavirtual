import axios from 'axios';
import {urlApi} from '../helpers/url';

export const listarTipoProducto = async()=>{

    try{

        const fetch = await axios({
            method : 'GET',
            url : `${urlApi}/api/tipo-producto`
        });

        const {data} = fetch;

        return data;
    }catch(error){
        return error;
    }
}