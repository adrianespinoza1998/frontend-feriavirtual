import React from 'react'
import '../styles/productos.css'
import {userIcon} from '../helpers/getUserImg';

export const FichaProducto = ({nombreProducto, precioProducto, 
    stockProducto}) => {

    const img = "https://cdn.discordapp.com/attachments/650501558437675042/888876601956265994/pngfind.com-apples-png-372458.png";

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
