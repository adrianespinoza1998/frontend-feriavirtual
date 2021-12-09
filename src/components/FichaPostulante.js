import React from 'react'
import { useForm } from '../hooks/useForm';
import { SelectPostulante } from './selects/SelectPostulante';

export const FichaPostulante = ({id = 0, tipoProducto = '', cantidad = 0}) => {

    const [form, handleInputChange] = useForm({
        datos : {
            precioXKg : 0
        }
    });

    const {datos} = form;

    return (
        <div className="card mb-5">
            <h5 className="card-title p-3">Producto requerido</h5>
            <div className="card-body">
                <p className="card-text">Nombre: {tipoProducto}</p>
                <p className="card-text">Cantidad: {cantidad} KG</p>
                <p>Postulante:</p>
                <SelectPostulante idDetSol={id} handleInputChange={handleInputChange} />
                <p>Total: {(datos!=={}) ? `${datos.precioXKg * cantidad}` : `${67899}`} USD</p>
                <button className='btn btn-primary'>Aceptar</button>
            </div>
        </div>
    )
}
