import {urlApi} from './url';
import axios from 'axios';

export const editarUsuario = async(id,form) => {
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
            idRol
        } = form;

        const fetch = await axios({
            method : 'PUT',
            url : urlApi+'/api/usuario/'+id,
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
                terminosCondiciones : 1
            }
        });

        const {data} = fetch;

        return data;
    }catch(error){
        return error;
    }
}
