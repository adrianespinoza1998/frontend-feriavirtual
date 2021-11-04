import {urlApi} from './url';
import axios from 'axios';

export const listarPaises = async()=>{
    try{
        const fetch = await axios({
            method : 'GET',
            url : urlApi+'/api/pais'
        });

        const {data} = fetch;

        return data;
    }catch(error){
        return error;
    }
}