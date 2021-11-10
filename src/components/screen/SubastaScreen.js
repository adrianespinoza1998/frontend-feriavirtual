import { CrearSubasta } from '../CrearSubasta';
import { NavBar } from './../NavBar';

import { useReducer, useState } from 'react';
import { todoReducer } from '../reducer/todoReducer';
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom';

import '../../styles/subasta-screen.css';

export const SubastaScreen = ()=>{

    const history = useHistory();
    const init = ()=>{
        return JSON.parse(localStorage.getItem('detSolProd')) || [];
    }

    const handleAddDetSol = ( newTodo )=>{

        dispatch({
            type: 'add',
            payload: newTodo
        });
    }

    const [formProd, setFormProd] = useState([
        <CrearSubasta handleAddDetSol={handleAddDetSol} />
    ]);

    const [detSolProd, dispatch] = useReducer(todoReducer, [], init);

    useEffect(()=>{
        localStorage.setItem('detSolProd', JSON.stringify(detSolProd));
    }, [detSolProd]);

    const [subasta, setSubasta] = useState({
        idUsuario : 0,
        idSolicitudProductos : 0
    });

    const [solProd, setSolProd] = useState({
        idUsuario : 0,
        idTipoSolicitud : 0,
        idEstadoSolicitud : 0
    });

    /*const [detSolProd, setDetSolProd] = useState([{
        idProducto : 0,
        idSolicitudProducto : 0,
        cantidad : 0
    }]);*/

    const handleAddProducto = ()=>{
        setFormProd([
            ...formProd,
            <CrearSubasta  />
        ]);

        /*setDetSolProd([
            ...detSolProd,
            {
                idProducto : 0,
                idSolicitudProducto : 0,
                cantidad : 0
            }
        ]);*/
    }

    const handleRemoveProducto = ()=>{
        if(formProd.length>1){
            const listaProductos = formProd.slice(0,formProd.length-1);

            setFormProd(listaProductos);

            /*const listaDetSol = detSolProd.slice(0,detSolProd.length-1);

            setDetSolProd(listaDetSol);*/
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