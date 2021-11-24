import {urlApi} from './url';
import axios from 'axios';

export const getProductoXId = async(id) =>{

    try{

        const fetch = await axios({
            method: 'GET',
            url : `${urlApi}/api/producto/buscar/${id}`
        });

        const {data} = fetch;

        return data;
    }catch(error){
        return error;
    }
}