import React from 'react';
import { SelectPaises } from '../select/SelectPaises';
import { SelectRoles } from '../select/SelectRoles';
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
        terminosCondiciones : 0
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
                
                if(user==='No se creo el usuario ' + form.nombre){
                    alert(user.msg);
                }else{
                    alert(user.msg);
                    history.push('/login');
                }
            }else{
                console.log(JSON.stringify(form));
            }
        }catch(error){
            console.log(error);
        }
    }

    const toggleTerminos = (e)=>{
        if(e.target.value == 0){
            e.target.value = 1;
        }else{
            e.target.value = 0;
        }

        handleInputChange(e);
    }

    return(
        <form className="formulario-signin">
            <input 
                className="form-control mt-1" 
                type="text"
                name="nombre"
                placeholder="Nombre"
                value={nombre}
                onChange={handleInputChange}
            />

            <input 
                className="form-control mt-1"
                type="text"
                name="apPaterno"
                placeholder="Apellido Paterno"
                value={apPaterno}
                onChange={handleInputChange}
            />

            <input 
                className="form-control mt-1"
                type="text"
                name="apMaterno"
                placeholder="Apellido Materno"
                value={apMaterno}
                onChange={handleInputChange}
            />

            <input 
                className="form-control mt-1"
                type="number"
                name="dni"
                placeholder="DNI"
                value={dni}
                onChange={handleInputChange}
            />

            <input 
                className="form-control mt-1"
                type="text"
                name="direccion"
                placeholder="Dirección"
                value={direccion}
                onChange={handleInputChange}
            />

            <input 
                className="form-control mt-1"
                type="number"
                name="codPostal"
                placeholder="Código Postal"
                value={codPostal}
                onChange={handleInputChange}
            />

            <input 
                className="form-control mt-1"
                type="email"
                name="correo"
                placeholder="Correo"
                value={correo}
                onChange={handleInputChange}
            />

            <input 
                className="form-control mt-1"
                type="text"
                name="usuario"
                placeholder="Usuario"
                value={usuario}
                onChange={handleInputChange}
            />

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

            <div class="form-check mt-1">
                <input 
                    className="form-check-input" 
                    name="terminosCondiciones" 
                    type="checkbox" 
                    value={terminosCondiciones} 
                    id="flexCheck"
                    onChange={toggleTerminos} 
                />
                <label className="form-check-label" for="flexCheck">
                    Acepto los terminos y condiciones
                </label>
            </div>
            <div className="text-center">
                <button 
                    type="submit" 
                    className="btn btn-secondary mt-1"
                    onClick={handleSubmit}
                >
                    Registrarse
                </button>
            </div>
        </form>
    )
}