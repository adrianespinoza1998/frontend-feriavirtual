import axios from "axios";
import { urlApi } from './url';

export const createDetalleVenta = async(idTipoProducto = 0, cantidad = 0, precio = 0, idSubasta = 0) => {

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

        const stringFecha = `${diaFecha()}-${mesFecha()}-${fecha.getFullYear()}`;

        const fetch = await axios({
            method : 'POST',
            url : `${urlApi}/api/det-venta`,
            data : {
                idTipoProducto,
                cantidad,
                precio,
                idSubasta,
                fecha : '11-01-2022'
            }
        });
        
        const {data} = fetch;

        console.log(data);

        return data;
    
    }catch(error){
        return error;
    }
}
