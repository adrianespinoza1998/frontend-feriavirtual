import React from 'react'
import { useHistory } from "react-router-dom";

import { userIcon } from '../../helpers/getUserImg'
import { validarUsuario } from '../../helpers/validarUsuario';
import { useForm } from '../../hooks/useForm';

export const LoginForm = () => {

    const history = useHistory();
    
    const [form, handleInputChange] = useForm({
        correo: '',
        contrasena: ''
    });

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

    const handleRegister = ()=>{
        history.push('/signin');
    }

    return (
        <form className="card formulario-login">
            <img className="card-img-top icon-usuario" src={userIcon}/>
            <input
                className="form-control mt-2" 
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

            <div>
                <a className="text-blue registro" onClick={handleRegister}>Registrarse</a>
            </div>

            <button 
                className="btn btn-primary mt-2 mb-4" 
                type="submit" 
                onClick={handleSubmit}
            >
                Acceder
            </button>
        </form>
    );
}