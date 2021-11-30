import {useEffect, useMemo} from 'react';
import {useState} from 'react';
import { listarTipoProducto } from './../../helpers/listarTipoProducto';

export const SelectProducto = ({handleInputChange, id = 0})=>{

    const [productos, setProductos] = useState([]);

    useEffect(async()=>{
        const productos = await listarTipoProducto(); 
        setProductos(productos);
    },[]);

    const handle = ({target})=>{

        handleInputChange({
            target:{
                name: 'id_tipo_producto',
                value: parseInt(target.value)
            }
        });
    }

    return(
        <select className="form-control" onChange={handle} id={`selTipoProd${id}`}>
            <option key={0} value={0}>--SELECCIONE TIPO PRODUCTO--</option>
            {
                productos.map( prod =>{
                    return <option key={prod.id_tipo_producto} value={prod.id_tipo_producto} >{prod.descripcion}</option>

                })
            }
        </select>
    )
}