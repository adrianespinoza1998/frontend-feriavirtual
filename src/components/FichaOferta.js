import React from 'react'
import { useForm } from './../hooks/useForm';
import { useContext } from 'react';
import { UserContext } from './contexts/UserContext';
import { crearPostulacion } from './../helpers/crearPostulacion';

export const FichaOferta = ({idDetalleSolProd = 0, tipoProducto = '', cantidad = 0, lista = [], setLista = ()=>{}}) => {

    const [form, handleInputChange] = useForm({
        precio : ''
    });

    const {user} = useContext(UserContext);

    const {precio} = form;

    const handleClick = async()=>{
        if(Number(precio)>0){            

            await crearPostulacion(idDetalleSolProd, Number(precio), user.idUsuario);

            alert('Postulación creada');

            const listaFinal = lista.filter((l)=>l.idDetalleSolProductos !== idDetalleSolProd);

            setLista(listaFinal);
        }    
    }

    return (
        <div className="card mb-5">
            <h5 className="card-title p-3">Producto requerido</h5>
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
                    <div className="col-3">
                        Total: {(precio!=='') ? (Number(precio) * cantidad) : 0} USD
                    </div>
                    <div className="col-3">
                        <button className="btn btn-primary" onClick={handleClick}>Aceptar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
