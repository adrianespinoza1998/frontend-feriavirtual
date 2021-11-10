import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

import '../../styles/landingstyles.css'
import { FichaProducto } from '../FichaProducto'
import { NavBar } from '../NavBar'
import { listarProductos } from '../../helpers/listarProductos';

export const MarketScreen = () => {

    const [productos, setProductos] = useState([]);

    useEffect(async()=>{
        const productos = await listarProductos(0); 
        setProductos(productos);
    },[]);

    return (
        <div>
            <NavBar />
            {
                productos.map( producto =>{
                    return <FichaProducto 
                        nombreProducto={producto.nombre}
                        precioProducto={producto.precio}
                        stockProducto={producto.stock}
                        key={producto.idProducto}
                        img={producto.img}
                    />
                })
            }
        </div>
    );
}
