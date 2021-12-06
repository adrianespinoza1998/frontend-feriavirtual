import axios from "axios";
import { urlApi } from './url';

import React from 'react'

export const crearPostulacion = async(idDetalleSolProd = 0, precioXKg = 0, idUsuario = 0) => {

    try{

        const fetch = axios({
            method : 'POST',
            url : `${urlApi}/api/postulacion`,
            data : {
                idDetalleSolProd,
                precioXKg,
                idUsuario
            }
        });

        const {data} = fetch;

        return data;
    }catch(error){
        return error;
    }
}
