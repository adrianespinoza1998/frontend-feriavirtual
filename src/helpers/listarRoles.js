import {urlApi} from './url';
import axios from 'axios';

export const listarRoles = async()=>{
    try{
        const fetch = await axios({
            method : 'GET',
            url : urlApi+'/api/rol'
        });

        const {data} = fetch;

        return data;
    }catch(error){
        return error;
    }
}