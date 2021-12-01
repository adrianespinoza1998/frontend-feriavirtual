import axios from 'axios';
import {urlApi} from '../helpers/url';

export const listarSubastas = async(id) => {

    try{
        const fetch = await axios({
            method: 'GET',
            url: `${urlApi}/api/subastas/${id}`,
        });
    
        const {data} = fetch;

        console.log(JSON.stringify(data));
        return data;
    }catch(error){
        return error;
    }
}
