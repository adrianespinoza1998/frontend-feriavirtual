import { CrearSubasta } from '../CrearSubasta';
import { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { SubastaContext } from './../SubastaContext';

import '../../styles/subasta-screen.css';
import { UserContext } from './../UserContext';

export const SubastaScreen = ()=>{

    //TODO: Implementar useMemo
    const {user} = useContext(UserContext);

    const history = useHistory();

    const {subasta, dispatch} = useContext(SubastaContext);

    const [id, setId] = useState(1);

    const [formProd, setFormProd] = useState([
        <CrearSubasta key={Date.now().toString()} id={id} dispatch={dispatch} />
    ]);

    const handleAddProducto = ()=>{

        const i = id+1;

        setId(i);

        setFormProd([
            ...formProd,
            <CrearSubasta key={Date.now().toString()} id={i} dispatch={dispatch} />
        ]);
    }

    const handleRemoveProducto = ()=>{
        if(formProd.length>1){
            const listaProductos = formProd.slice(0,formProd.length-1);

            setId(id-1);

            setFormProd(listaProductos);

            const action = {
                type : 'delete',
                payload : id
            }

            dispatch(action);
        }
    }

    const handleSubmit = ()=>{

        //TODO: Crear helpers solicitud producto

        console.log(JSON.stringify(subasta));

        console.log(JSON.stringify(user));
    }

    return(
        <div>
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