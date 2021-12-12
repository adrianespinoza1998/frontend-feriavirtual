import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

import '../../styles/landingstyles.css'
import { FichaProducto } from '../FichaProducto'
import { listarProductos } from '../../helpers/listarProductos';
import { useContext } from 'react';
import { VentaInternaContext } from './../contexts/VentaInternaContext';

export const MarketScreen = () => {

    const {venta} = useContext(VentaInternaContext);

    const [productos, setProductos] = useState([]);

    const fetchData = async()=>{
        const productos = await listarProductos(0); 
        setProductos(productos);
    }
    useEffect(()=>{
        fetchData();
    },[venta]);

    return (
        <div>
            {
                productos.map( (producto) =>{

                    return <FichaProducto 
                                key={producto.idProducto}
                                nombreProducto={producto.nombre}
                                precioProducto={producto.precio}
                                stockProducto={producto.stock}
                                img={producto.img}
                                idProducto={producto.idProducto}
                            />                      
                })
            }
        </div>
    );
}
