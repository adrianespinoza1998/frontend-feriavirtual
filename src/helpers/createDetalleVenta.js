import axios from "axios";
import { urlApi } from './url';

export const createDetalleVenta = async(idTipoProducto = 0, cantidad = 0, precio = 0, idSubasta = 0) => {

    try{

        const fetch = await axios({
            method : 'POST',
            url : `${urlApi}/api/det-venta`,
            data : {
                idTipoProducto,
                cantidad,
                precio,
                idSubasta
            }
        });
        
        const {data} = fetch;

        console.log(data);

        return data;
    
    }catch(error){
        return error;
    }
}
