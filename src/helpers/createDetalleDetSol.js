import axios from "axios";
import { urlApi } from './url';

export const createDetalleDetSol = async(idSolicitudProductos = 0, cantidad = 0, idTipoProducto = 0)=>{

    try{

        const fetch = axios({
            method : 'POST',
            url : `${urlApi}/api/det-sol-prod`,
            data : {
                idTipoProducto,
                idSolicitudProductos,
                cantidad
            }
        });

        const {data} = fetch;

        return data;
    }catch(error){
        return error;
    }
}