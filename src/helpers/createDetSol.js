import axios from "axios";
import { urlApi } from './url';

export const createDetSol = async(idUsuario = 0, idTipoSolicitud = 1, idEstadoSolicitud = 1)=>{

    try{
     
        const fecha = new Date();

        const diaFecha = ()=>{
            const dia = fecha.getDay();

            if(Number(dia)<10){
                return `0${dia}`
            }else{
                return dia;
            } 
        }

        const mesFecha = ()=>{
            const mes = fecha.getMonth();

            if(Number(mes)<10){
                return `0${mes}`
            }else{
                return mes;
            }
        }

        const stringFecha = `${mesFecha()}-${diaFecha()}-${fecha.getFullYear()}`;

        console.log(stringFecha);

        const fetch = await axios({
            method : 'POST',
            url : `${urlApi}/api/sol-prod`,
            data : {
                idUsuario,
                idTipoSolicitud,
                idEstadoSolicitud,
                fecha : '09-12-2021'
            }
        });

        const {data} = fetch;

        return data;
        
    }catch(error){
        return error;
    }
}