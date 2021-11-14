import { CrearSubasta } from '../CrearSubasta';
import { NavBar } from './../NavBar';

import { useState } from 'react';
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom';

import '../../styles/subasta-screen.css';

export const SubastaScreen = ()=>{

    const history = useHistory();

    const [id, setId] = useState(1);

    const [formProd, setFormProd] = useState([
        <CrearSubasta key={Date.now().toString()} id={id} />
    ]);

    const handleAddProducto = ()=>{

        const i = id+1;

        setId(i);

        setFormProd([
            ...formProd,
            <CrearSubasta key={Date.now().toString()} id={i}  />
        ]);
    }

    const handleRemoveProducto = ()=>{
        if(formProd.length>1){
            const listaProductos = formProd.slice(0,formProd.length-1);

            setId(id-1);

            setFormProd(listaProductos);
        }
    }

    const handleSubmit = ()=>{
        alert('Subasta guardada');
        history.push('/externo');
    }

    return(
        <div>
            <NavBar />
            <div className="formulario-signin">
                <div className="text-center">
                    <p className="display-4">Crear Subasta</p>
                </div>
                <div>
                    {
                        formProd.map((producto)=>{
                            return producto;
                        })
                    }
                </div>
                <button className="btn btn-primary mt-1" onClick={handleAddProducto}>+</button>
                <button 
                    className="btn btn-danger mt-1 boton-menos"
                    onClick={handleRemoveProducto} 
                >
                    -
                </button>
                <div className="text-center">
                    <button 
                        className="btn btn-secondary mt-2"
                        onClick={handleSubmit}
                    >
                        Guardar
                    </button>
                </div>
            </div>
        </div>
    );
}