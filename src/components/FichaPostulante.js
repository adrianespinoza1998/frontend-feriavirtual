import React from 'react'
import { useForm } from '../hooks/useForm';
import { SelectPostulante } from './selects/SelectPostulante';
import { createDetalleVenta } from './../helpers/createDetalleVenta';
import { listarTipoProducto } from '../helpers/listarTipoProducto';
import { useContext } from 'react';
import { UserContext } from './contexts/UserContext';

export const FichaPostulante = ({id = 0, tipoProducto = '', cantidad = 0, idSubasta = 0, lista = [], 
        setLista = ()=>{}}) => {

    const {user} = useContext(UserContext);

    const [form, handleInputChange] = useForm({
        datos : {
            precioXKg : 0
        }
    });

    const {datos} = form;

    const handleClick = async()=>{

        if(datos.precioXKg === 0){
            alert('No se ha seleccionado postulante');
        }else{
            //await crearPostulacion(id, datos.precioXKg, datos.idUsuario);

            console.log(JSON.stringify(datos));

            const listaTipoProd = await listarTipoProducto();

            const tipoProd = listaTipoProd.find(tp => tp.descripcion === tipoProducto);
            const {id_tipo_producto : idTipoProducto} = tipoProd;
            const idSubasta = Number(localStorage.getItem('idSubastas')) || 0;

            await createDetalleVenta(idTipoProducto, cantidad,
                datos.precioXKg * cantidad, idSubasta);

            alert('Postulante seleccionado');

            const listaFinal = lista.filter(l=> l.idDetalleSolProductos !== id);

            setLista(listaFinal);
            //const listaFinal = lista.filter(l=>{ l.})
        }
    }

    return (
        <div className="card mb-5">
            <h5 className="card-title p-3">Producto requerido</h5>
            <div className="card-body">
                <p className="card-text">Nombre: {tipoProducto}</p>
                <p className="card-text">Cantidad: {cantidad} KG</p>
                <p>Postulante:</p>
                <SelectPostulante idDetSol={id} handleInputChange={handleInputChange} />
                <p>Total: {(datos!=={}) ? `${datos.precioXKg * cantidad}` : `${67899}`} USD</p>
                <button onClick={handleClick} className='btn btn-primary'>Aceptar</button>
            </div>
        </div>
    )
}
