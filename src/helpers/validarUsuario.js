import axios from 'axios';
import { urlApi } from './url';

export const validarUsuario = async(correo, contrasena) => {

    try{
        const fetch = await axios({
            method: 'POST',
            url: urlApi + '/api/auth',
            data: {
                correo,
                contrasena
            }
        });
    
        const {data} = fetch;
    
        return data;
    }catch(error){
        return error;
    }
}
