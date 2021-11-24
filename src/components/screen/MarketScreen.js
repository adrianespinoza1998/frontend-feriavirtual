import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

import '../../styles/landingstyles.css'
import { FichaProducto } from '../FichaProducto'
import { listarProductos } from '../../helpers/listarProductos';
import { useHistory } from 'react-router-dom';

export const MarketScreen = () => {

    const [productos, setProductos] = useState([]);

    const [loading, setLoading] = useState(false);
    
    const history = useHistory();

    useEffect(async()=>{
        const productos = await listarProductos(0); 
        setProductos(productos);
    },[]);

    useEffect(()=>{
        setLoading(true);
    });

    const handleClick = (idProducto)=>{
        if(loading){
            history.push(`/producto/${idProducto}`);
        }
    }

    return (
        <div>
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
