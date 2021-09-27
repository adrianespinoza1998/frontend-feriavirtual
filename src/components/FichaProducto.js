import React from 'react'
import '../styles/productos.css'

export const FichaProducto = ({nombre, precio, stock, img}) => {
    return (
        <div className="card ficha-producto">
            <img className="card-img-top img-manzana" src={img} />
            <div className="card-body">
                <p>Nombre: {nombre}</p>
                <p>Precio: {precio}</p>
                <p>Stock: {stock}</p>
            </div>
        </div>
    );
}
