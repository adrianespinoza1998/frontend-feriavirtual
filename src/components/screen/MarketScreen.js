import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

import '../../styles/landingstyles.css'
import { FichaProducto } from '../FichaProducto'
import { NavBar } from '../NavBar'
import { listarProductos } from '../../helpers/listarProductos';
//import { useValidarRol } from './../../hooks/useValidarRol';

export const MarketScreen = () => {

    const [productos, setProductos] = useState([]);
    //const [validar] = useValidarRol();

    //validar(localStorage.getItem('user'));

    useEffect(async()=>{
        /*if(localStorage.getItem('user')==null){
            history.push('/login');
        }else{
            usuario = JSON.parse(localStorage.getItem('user'));
            if(usuario.idRol !== 4){
                //history.push('/login');
                validar(usuario);
            }
        }*/

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
