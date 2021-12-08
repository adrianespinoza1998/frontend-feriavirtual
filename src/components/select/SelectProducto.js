import { listarProductos } from '../../helpers/listarProductos';
import {useEffect} from 'react';
import {useState} from 'react';

export const SelectProducto = ({handleInputChange})=>{

    const [productos, setProductos] = useState([]);

    useEffect(async()=>{
        const productos = await listarProductos(0); 
        setProductos(productos);
    },[]);

    const handle = ({target})=>{

        handleInputChange({
            target:{
                name: 'idProducto',
                value: parseInt(target.value)
            }
        });
    }

    return(
        <select className="form-control" onChange={handle}>
            {
                productos.map( prod =>{
                    return <option key={prod.idProducto} value={prod.idProducto}>{prod.nombre}</option>

                })
            }
        </select>
    )
}