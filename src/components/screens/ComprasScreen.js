import React, { useContext, useEffect, useState } from 'react'
import { VentaInternaContext } from '../contexts/VentaInternaContext';
import { ListaCompra } from '../ListaCompra';

export const ComprasScreen = () => {

    const [productos, setProductos] = useState([]);

    const {venta, dispatchVenta} = useContext(VentaInternaContext);

    useEffect(() => {
        setProductos(JSON.parse(localStorage.getItem('ventas')));
    }, [venta])

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
            <div className="btn btn-primary">Comprar</div>
        </div>
    )
}