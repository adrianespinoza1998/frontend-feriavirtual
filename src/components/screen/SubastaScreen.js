import { CrearSubasta } from '../CrearSubasta';

import { useContext, useState } from 'react';
import { SubastaContext } from './../SubastaContext';
import { UserContext } from './../UserContext';

import { createDetSol } from '../../helpers/createDetSol';
import { createDetalleDetSol } from '../../helpers/createDetalleDetSol';
import { createSubasta } from '../../helpers/createSubasta';
import { validarSubasta } from '../../helpers/validarSubasta';

import '../../styles/subasta-screen.css';

export const SubastaScreen = ()=>{

    //TODO: Implementar useMemo
    const {user} = useContext(UserContext);

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

    const handleSubmit = async(e)=>{

        if(validarSubasta(subasta)){
            const solProd = await createDetSol(user.idUsuario, 2, 1);

            const {msg} = solProd;
    
            const listaSolProd = msg.split(" ");
    
            const idSolProd = listaSolProd[listaSolProd.length-1];

            for(const sub of subasta){

                const input = document.querySelector(`#inputSubasta${sub.id}`);
                const cantidad = input.value;
                await createDetalleDetSol(Number(idSolProd), Number(cantidad), sub.id_tipo_producto);
    
            }
    
            await createSubasta(user.idUsuario, idSolProd);
    
            alert('Subasta creada de forma correcta');
        }else{
            console.log('Uno o más datos erroneos');
        }
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