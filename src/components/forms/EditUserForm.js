import React from 'react'
import { useContext } from 'react';
import { UserContext } from './../contexts/UserContext';
import { useForm } from './../../hooks/useForm';
import { validarRegistro } from '../../helpers/validarRegistro';
import { editarUsuario } from './../../helpers/editarUsuario';

export const EditUserForm = () => {

    const {user, setUser} = useContext(UserContext);

    const [form, handleInputChange] = useForm({
        nombre : user.nombre,
        apPaterno : user.apPaterno,
        apMaterno : user.apMaterno,
        dni : user.dni,
        direccion : user.direccion,
        codPostal : user.codPostal,
        correo : user.correo,
        usuario : user.usuario,
        contrasena : user.contrasena,
        idPais : user.idPais,
        idRol : user.idRol,
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
        contrasena
    } = form;

    const handleSubmit = async(e)=>{
        e.preventDefault();

        try{

            const data = {
                ...form,
                        idPais : user.idPais,
                        idRol : user.idRol,
            }

            if(validarRegistro(data)){
                const userEdit = await editarUsuario(user.idUsuario,form);

                const {msg} = userEdit;

                console.log(JSON.stringify(userEdit));

                const arrayUser = msg.split(' ');
                
                if(arrayUser.includes('No')){
                    alert('Dni y/o correo y/o usuario ya se han registrado en el sistema');
                }else{
                    alert('Usuario editado');
                    setUser({
                        ...form,
                        idPais : user.idPais,
                        idRol : user.idRol,
                    });
                }

            }
        }catch(error){
            console.log(error);
        }
    }

    return (
        <form className='card container-fluid p-5 mx' onSubmit={handleSubmit}>
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

                <button className='btn btn-primary mt-2' type='submit'>Aceptar</button>

        </form>
    )
}
