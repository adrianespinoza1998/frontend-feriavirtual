import React from 'react'
import { useHistory } from "react-router-dom";
import { useState } from 'react';
import { useEffect } from 'react';

import '../styles/landingstyles.css'
import { FichaProducto } from './FichaProducto'
import { NavBar } from './NavBar'
import { listarProductos } from './../helpers/listarProductos';

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
        const productos = await listarProductos(usuario.idRol); 
        console.log(productos);
        setProductos(productos);
    },[]);

    return (
        <div>
            <NavBar />
            {
                productos.map( producto =>{
                    return <FichaProducto 
                        nombreProducto={producto.nombreProducto}
                        precioProducto={producto.precioProducto}
                        stockProducto={producto.stockProducto}
                        key={producto.idProducto}
                    />
                })
            }
        </div>
    );
}
