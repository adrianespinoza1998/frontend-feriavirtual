import React, { useEffect } from 'react'
import { useHistory } from 'react-router';
import '../styles/productos.css'

export const FichaProducto = ({nombreProducto, precioProducto, 
    stockProducto, img, idProducto}) => {

    const history = useHistory();

    const handleClick = (idProducto)=>{
        history.push(`/producto/${idProducto}`);
    }

    return (
        <div className="card ficha-producto" id={`fichaProd${idProducto}`} onClick={()=>{handleClick(idProducto)}}>
            <img className="card-img-top img-manzana" src={img} />
            <div className="card-body">
                <p>Nombre: {nombreProducto}</p>
                <p>Precio: {precioProducto}</p>
                <p>Stock: {stockProducto}</p>
            </div>
        </div>
    );
}
