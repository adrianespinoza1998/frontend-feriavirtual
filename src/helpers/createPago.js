import axios from "axios";
import { urlApi } from "./url";

export const createPago = async(idSubastas = 0, monto = 0, tarjeta = 0, idMoneda = 0) => {
    try{

        const fetch = await axios({
            method : 'POST',
            url : `${urlApi}/api/pagos`,
            data : {
                idSubastas,
                monto,
                tarjeta,
                idMoneda
            }
        });

        const {data} = fetch;

        return data;
    }catch(error){
        return error;
    }
}
