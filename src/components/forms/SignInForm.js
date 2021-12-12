import React from 'react';
import { SelectPaises } from '../selects/SelectPaises';
import { SelectRoles } from '../selects/SelectRoles';
import { useForm } from './../../hooks/useForm';
import { useHistory } from "react-router-dom";

import '../../styles/singin-form.css'
import { validarRegistro } from './../../helpers/validarRegistro';
import { createUsuario } from './../../helpers/createUsuario';

export const SignInForm = ()=>{

    const history = useHistory();

    const [form, handleInputChange] = useForm({
        nombre : '',
        apPaterno : '',
        apMaterno : '',
        dni : '',
        direccion : '',
        codPostal : '',
        correo : '',
        usuario : '',
        contrasena : '',
        idPais : 0,
        idRol : 0,
        terminosCondiciones : false
    });

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
        terminosCondiciones
    } = form;

    const handleSubmit = async(e)=>{
        e.preventDefault();

        try{
            if(validarRegistro(form)){
                const user = await createUsuario(form);

                const {msg} = user;

                const arrayUser = msg.split(' ');
                
                if(arrayUser.includes('No')){
                    alert('Dni y/o correo y/o usuario ya se han registrado en el sistema');
                }else{
                    alert(user.msg);
                    history.push('/login');
                }

            }
        }catch(error){
            console.log(error);
        }
    }

    const toggleTerminos = ()=>{

        handleInputChange({
            target:{
                name : 'terminosCondiciones',
                value : !terminosCondiciones
            }
        });
    }

    return(
        <form className="formulario-signin" onSubmit={handleSubmit}>
            <p>Nombre:</p>
            <input 
                className="form-control mt-1" 
                type="text"
                name="nombre"
                placeholder="Nombre"
                value={nombre}
                onChange={handleInputChange}
            />
            <p className='mt-3'>Apellido Paterno:</p>
            <input 
                className="form-control mt-1"
                type="text"
                name="apPaterno"
                placeholder="Apellido Paterno"
                value={apPaterno}
                onChange={handleInputChange}
            />
            <p className='mt-3'>Apellido Materno:</p>
            <input 
                className="form-control mt-1"
                type="text"
                name="apMaterno"
                placeholder="Apellido Materno"
                value={apMaterno}
                onChange={handleInputChange}
            />
            <p className='mt-3'>DNI:</p>
            <input 
                className="form-control mt-1"
                type="text"
                pattern="\d*"
                name="dni"
                maxLength="10"
                minLength="7"
                placeholder="Ejemplo: 1000000"
                value={dni}
                onChange={handleInputChange}
            />
            <p className='mt-3'>Dirección:</p>
            <input 
                className="form-control mt-1"
                type="text"
                name="direccion"
                placeholder="Ejemplo: Nombre Calle 1234"
                value={direccion}
                onChange={handleInputChange}
            />
            <p className='mt-3'>Código postal</p>
            <input 
                className="form-control mt-1"
                type="text"
                pattern="\d*"
                minLength="7"
                maxLength="8"
                name="codPostal"
                placeholder="Ejemplo: 76800000"
                value={codPostal}
                onChange={handleInputChange}
            />
            <p className='mt-3'>Correo electrónico</p>
            <input 
                className="form-control mt-1"
                type="email"
                name="correo"
                placeholder="Ejemplo: nombre@proveedor.com"
                value={correo}
                onChange={handleInputChange}
            />
            <p className='mt-3'>Usuario:</p>
            <input 
                className="form-control mt-1"
                type="text"
                name="usuario"
                placeholder="Ejemplo: nombre190"
                value={usuario}
                onChange={handleInputChange}
            />
            <p className='mt-3'>Contraseña</p>
            <input
                className="form-control mt-1"
                type="password"
                name="contrasena"
                placeholder="Contraseña"
                value={contrasena}
                onChange={handleInputChange}
            />

            <p className="mt-1">Seleccionar país:</p>
            <SelectPaises handleInputChange={handleInputChange} />
            <p className="mt-1">Seleccionar rol:</p>
            <SelectRoles handleInputChange={handleInputChange} />

            <div className="form-check mt-1">
                <input 
                    className="form-check-input" 
                    name="terminosCondiciones" 
                    type="checkbox" 
                    value={terminosCondiciones} 
                    id="flexCheck"
                    onChange={toggleTerminos} 
                />
                <label className="form-check-label">
                    Acepto los terminos y condiciones
                </label>
            </div>
            <div className="text-center">
                <button 
                    type="submit" 
                    className="btn btn-secondary mt-1"
                    //onClick={handleSubmit}
                >
                    Registrarse
                </button>
            </div>
        </form>
    )
}