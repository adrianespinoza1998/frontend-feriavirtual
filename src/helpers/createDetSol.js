import axios from "axios";
import { urlApi } from './url';

export const createDetSol = async(idUsuario = 0, idTipoSolicitud = 1, idEstadoSolicitud = 1)=>{

    try{
        
        const fetch = await axios({
            method : 'POST',
            url : `${urlApi}/api/sol-prod`,
            data : {
                idUsuario,
                idTipoSolicitud,
                idEstadoSolicitud
            }
        });

        const {data} = fetch;

        return data;
        
    }catch(error){
        return error;
    }
}