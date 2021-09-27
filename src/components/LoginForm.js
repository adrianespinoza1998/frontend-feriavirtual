import React from 'react'
import { Link } from 'react-router-dom';
import { userIcon } from '../helpers/getUserImg'

export const LoginForm = () => {

    const handleSubmit = (e)=>{
        e.preventDefault();
    }

    return (
        <form className="card mt-5" width="100em" height="100em">
            <img className="card-img-top icon-usuario" width="100px" height="100px" src={userIcon}/>
            <div className="card-body text-center">
                <h4 className="card-title">Iniciar Sesión</h4>

                <input className="form-control" type="email" placeholder="correo" />
                <input className="form-control mt-2" type="password" placeholder="contraseña" />
                <button className="btn btn-primary mt-2" type="submit" onClick={handleSubmit}>Acceder</button>
            </div>
        </form>
    );
}
