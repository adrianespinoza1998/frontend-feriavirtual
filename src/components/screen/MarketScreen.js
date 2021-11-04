import React from 'react'
import { useHistory } from "react-router-dom";
import { useState } from 'react';
import { useEffect } from 'react';

import '../../styles/landingstyles.css'
import { FichaProducto } from '../FichaProducto'
import { NavBar } from '../NavBar'
import { listarProductos } from '../../helpers/listarProductos';

export const MarketScreen = () => {

    let usuario;
    const history = useHistory();
    const [productos, setProductos] = useState([]);

    if(localStorage.getItem('user')==null){
        history.push('/login');
    }else{
        usuario = JSON.parse(localStorage.getItem('user'));
    }

    useEffect(async()=>{
        const productos = await listarProductos(0); 
        console.log(productos);
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
