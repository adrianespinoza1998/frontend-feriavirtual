import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import { VentaInternaContext } from '../contexts/VentaInternaContext';
import { ListaCompra } from '../ListaCompra';

export const ComprasScreen = () => {

    const history = useHistory();

    const [productos, setProductos] = useState([]);

    const {venta, dispatchVenta} = useContext(VentaInternaContext);

    useEffect(() => {
        const prod = localStorage.getItem('ventas'); 

        if(prod === null){
            setProductos([]);
        }else{
            setProductos(JSON.parse(localStorage.getItem('ventas')));
        }
    }, [venta]);

    const handleCick = ()=>{
        if(productos.length>0){
            history.push('/pago');
        }else{
            alert('Carro de compras vacío');
        }
    }

    return (
        <div className="container">
            <div className="text-center">
                <p className="display-4">Carrito de compras</p>
            </div>
            <hr />
            <div className="container-fluid">
                {
                    productos.map((producto)=>{
                        return <ListaCompra
                                    key={producto.idProducto} 
                                    idProducto={producto.idProducto}
                                    img={producto.img} 
                                    nombre={producto.nombre}
                                    precio={producto.precio}
                                    cantidad={producto.cantidad}
                                    venta={venta}
                                    dispatchVenta={dispatchVenta}
                                />
                    })
                }
            </div>
            <div className="text-center">
                <button className="btn btn-primary" onClick={handleCick}>
                    Comprar
                </button>
            </div>
        </div>
    )
}