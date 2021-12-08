import axios from "axios";
import { urlApi } from "./url";

export const updateProducto = async(id = 0, kilos = 0, precio = 0, stock = 0, idUsuario = 0,
        idTipoProducto = 0, img = '') => {
    try{

        const fetch = axios({
            method : 'PUT',
            url : `${urlApi}/api/producto/${id}`,
            data : {
                kilos,
                precio,
                stock,
                idUsuario,
                idTipoProducto,
                img
            }
        });

        const {data} = fetch;

        return data;
    }catch(error){
        return error;
    }
}
