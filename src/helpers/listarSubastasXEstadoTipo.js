import axios from 'axios';
import {urlApi} from '../helpers/url';

export const listarSubastasXEstadoTipo = async(idEstado = 0, idTipo = 0) => {

    try{
        const fetch = await axios({
            method: 'GET',
            url: `${urlApi}/api/subastas/${idEstado}/${idTipo}`,
        });
    
        const {data} = fetch;

        console.log(JSON.stringify(data));
        return data;
    }catch(error){
        return error;
    }

}
