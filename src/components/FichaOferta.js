import React from 'react'
import { useForm } from './../hooks/useForm';

export const FichaOferta = ({tipoProducto = '', cantidad = 0}) => {

    const [form, handleInputChange] = useForm({
        precio : ''
    });

    const {precio} = form;

    return (
        <div className="card mb-5">
            <h5 class="card-title p-3">Producto requerido</h5>
            <div className="card-body">
                <p className="card-text">Nombre: {tipoProducto}</p>
                <p className="card-text">Cantidad requerida: {cantidad} KG</p>
                <div className="row">
                    <div className="col-3">
                        <p className="card-text">Ofertar precio x KG (USD):</p>
                    </div>
                    <div className="col-3">
                        <input 
                            type="number" 
                            className="form-control" 
                            name="precio"
                            value={precio}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div class="col-3">
                        Total: {(precio!=='') ? (Number(precio) * cantidad) : 0} USD
                    </div>
                    <div className="col-3">
                        <button className="btn btn-primary">Aceptar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
