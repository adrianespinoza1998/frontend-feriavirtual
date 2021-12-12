import React, { useContext, useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router';
import '../../styles/productos.css'
import { getProductoXId } from '../../helpers/getProductoXId';
import { useForm } from '../../hooks/useForm';
import { VentaInternaContext } from '../contexts/VentaInternaContext';

export const ProductoScreen = () => {

    const {venta, dispatchVenta} =useContext(VentaInternaContext);

    const history = useHistory();

    const {id} = useParams();

    const [pedido, handleInputChange] = useForm({
        cantidad : ''
    });

    const {cantidad} = pedido;

    const [producto, setProducto] = useState({});

    const fetchData = async(id)=>{
        const getProducto = await getProductoXId(id);

        console.log(JSON.stringify(getProducto));

        if(getProducto.idProducto === 0){
            history.push('/market');
        }

        setProducto(getProducto);
    }

    useEffect(()=>{
        fetchData(id);
    },[id]);

    useEffect(()=>{
        localStorage.setItem('ventas', JSON.stringify(venta));
    }, [venta]);

    const handleClick = (e)=>{

        e.preventDefault();

        if(cantidad === ''){
            alert('Por favor ingrese los kg del pedido');
        }else{

            if(Number(cantidad)<=Number(producto.stock)){

                const action = {
                    type : 'add',
                    payload : {
                        ...producto,
                        cantidad
                    }
                }
                
                dispatchVenta(action);
        
                alert(`${producto.nombre} añadido al carrito de compras`)
            }else{
                alert('Cantidad supera al stock permitido');
            }
        }
    }

    return (
        <form onSubmit={handleClick}>
            <div className="card producto">
                <img className="card-img-top img-manzana-screen" src={producto.img} alt="manzana" />
                <div className="card-body">
                    <p>Nombre: {producto.nombre}</p>
                    <p>Precio: {`${producto.precio} CLP`}</p>
                    <p>Stock: {`${producto.stock} KG`}</p>
                </div>
            </div>

            <div className="text-center">
                <div className="number-choose mt-3 inline">
                    <div>
                        <input 
                            width="100px" 
                            type="text"
                            pattern="\d*"
                            minLength="1"
                            className="form-control"
                            name="cantidad"
                            value={cantidad}
                            onChange={handleInputChange} 
                        />
                    </div>
                    <div>
                        <p>KG</p>
                    </div>
                    <div>
                        <button 
                            type="submit" 
                            className="btn btn-primary mt-3 mb-3"
                        >
                            Agregar al carro
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
}
