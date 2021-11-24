import React, { useEffect, useState } from 'react'
import { Redirect, useParams } from 'react-router';
import '../../styles/productos.css'
import { getProductoXId } from './../../helpers/getProductoXId';

export const ProductoScreen = () => {

    const {id} = useParams();

    console.log(id);

    const [producto, setProducto] = useState({});

    useEffect(async()=>{
        const getProducto = await getProductoXId(id);

        if(getProducto.idProducto === 0){
            return <Redirect to="/market" />
        }

        setProducto(getProducto);

        console.log(JSON.stringify(getProducto));

    },[]);

    return (
        <div>
            <div className="card producto">
                <img className="card-img-top img-manzana-screen" src={producto.img} />
                <div className="card-body">
                    <p>Nombre: {producto.nombre}</p>
                    <p>Precio: {producto.precio}</p>
                    <p>Stock: {producto.stock}</p>
                </div>
            </div>

            <div className="text-center">
                <div className="number-choose mt-3 inline">
                    <div>
                        <input width="100px" type="number" className="form-control" />
                    </div>
                    <div>
                        <p>KG</p>
                    </div>
                    <div>
                        <button type="button" className="btn btn-primary mt-3 mb-3">Agregar al carro</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
