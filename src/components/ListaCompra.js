import React, { useEffect } from 'react';
import '../styles/lista-productos.css'

export const ListaCompra = ({idProducto = 0, img = '', nombre = '', precio = 0, cantidad = 0, venta, dispatchVenta}) => {

    useEffect(()=>{
        localStorage.setItem('ventas', JSON.stringify(venta));
    }, [venta]);

    const handleDelete = (idProducto, nombre)=>{
        const action = {
            type: 'delete',
            payload : idProducto
        }

        dispatchVenta(action);

        alert(`${nombre} eliminado/a del carrito de compras`)
    }

    return (
        <div className="row container-fluid">
            <div className="col-3">
                <img src={img} alt={nombre} />
            </div>
            <div className="col-2">
                <p>Nombre: {nombre}</p>
            </div>
            <div className="col-2">
                <p>Precio: {precio}</p>
            </div>
            <div className="col-2">
                <p>Cantidad: {cantidad}</p>
            </div>
            <div className="col-3">
                <button className="btn btn-light" onClick={()=>{handleDelete(idProducto, nombre)}}><i class="fas fa-trash-alt"></i></button>
            </div>
            <hr />
        </div>
    )
}
