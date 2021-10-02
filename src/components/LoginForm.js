import React from 'react'
import { useHistory } from "react-router-dom";

import { userIcon } from '../helpers/getUserImg'
import { validarUsuario } from '../helpers/validarUsuario';
import { useForm } from './../hooks/useForm';

export const LoginForm = () => {

    const history = useHistory();
    
    const [form, handleInputChange] = useForm({
        correo: '',
        contrasena: ''
    })

    const {correo, contrasena} = form;

    const handleSubmit = async(e)=>{
        e.preventDefault();

        if(correo !== '' && contrasena !== ''){
            const data = await validarUsuario(correo, contrasena);

            if(data.idUsuario!== 0){
                localStorage.setItem('user', JSON.stringify(data));
                history.push('/market');
            }else{
                alert('Correo y/o contraseña incorrectos');
            }
        }else{
            alert('Uno o más campos vacíos');
        }
    }

    return (
        <form className="card mt-5" width="100em" height="100em">
            <img className="card-img-top icon-usuario" width="100px" height="100px" src={userIcon}/>
            <div className="card-body text-center">
                <h4 className="card-title">Iniciar Sesión</h4>

                <input 
                    className="form-control" 
                    type="email" 
                    name="correo"
                    placeholder="correo" 
                    value={correo}
                    onChange={handleInputChange}
                />
                <input 
                    className="form-control mt-2" 
                    type="password"
                    name="contrasena" 
                    placeholder="contraseña" 
                    value={contrasena} 
                    onChange={handleInputChange}
                />
                <button 
                    className="btn btn-primary mt-2" 
                    type="submit" 
                    onClick={handleSubmit}
                >
                    Acceder
                </button>
            </div>
        </form>
    );
}
