import React from 'react'
import '../styles/productos.css'

export const FichaProducto = ({nombreProducto, precioProducto, 
    stockProducto, img}) => {

    return (
        <div className="card ficha-producto">
            <img className="card-img-top img-manzana" src={img} />
            <div className="card-body">
                <p>Nombre: {nombreProducto}</p>
                <p>Precio: {precioProducto}</p>
                <p>Stock: {stockProducto}</p>
            </div>
        </div>
    );
}
