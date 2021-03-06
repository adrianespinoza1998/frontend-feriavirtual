import axios from "axios";
import { urlApi } from "./url";


export const createUsuario = async(idUsuario = 0, idSolicitudProductos = 0 )=>{

    try{

        const fetch = axios({
            method : 'POST',
            url : `${urlApi}/api/subastas`,
            data : {
                idUsuario,
                idSolicitudProductos
            }
        });

        const {data} = fetch;

        return data;
    }catch(error){
        return error;
    }
}