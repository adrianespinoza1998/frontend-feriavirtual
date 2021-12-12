import {urlApi} from './url';
import axios from 'axios';

export const createUsuario = async(form)=>{

    try{
        const {
            nombre, 
            apPaterno, 
            apMaterno, 
            dni, 
            direccion, 
            codPostal, 
            correo, 
            usuario, 
            contrasena,
            idPais,
            idRol,
            terminosCondiciones
        } = form;

        const fetch = await axios({
            method : 'POST',
            url : urlApi+'/api/usuario',
            data: {
                nombre,
                apPaterno,
                apMaterno,
                dni,
                direccion,
                codPostal,
                correo,
                usuario,
                contrasena,
                idPais,
                idRol,
                idEstado : 1,
                terminosCondiciones : (terminosCondiciones) ? 1 : 0
            }
        });

        const {data} = fetch;

        return data;
    }catch(error){
        return error;
    }
}