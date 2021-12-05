import axios from "axios";
import { urlApi } from "./url";

export const createSubasta = async(idUsuario = 0, idSolicitudProductos = 0 )=>{

    try{

        const fetch = await axios({
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