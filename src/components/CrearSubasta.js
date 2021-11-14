import { SelectProducto } from "./select/SelectProducto";
import { useState, useEffect } from 'react';
import { useForm } from './../hooks/useForm';

export const CrearSubasta = ({id})=>{

    const [form, handleInputChange] = useForm({
        idProducto : 0,
        cantidad : 0
    });


    useEffect(()=>{
        console.log(JSON.stringify(id));
    },[])
    const {idProducto, cantidad} = form;

    const handleChange = ()=>{

    }

    return (
        <form>
            <p className="mt-1">Seleccionar producto:</p>
            <SelectProducto handleInputChange={handleInputChange} />
            <p className="mt-1">Cantidad:</p>
            <div className="row">
                <div className="col-11">
                    <input 
                        type="number" 
                        className="form-control"
                        name="cantidad"
                        value={cantidad}
                        onChange={handleInputChange} 
                    />
                </div>
                <div className="col-1">
                    <p> KG</p>
                </div>
            </div>
        </form>
    );
}