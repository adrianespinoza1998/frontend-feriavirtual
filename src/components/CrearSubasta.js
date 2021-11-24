import { SelectProducto } from "./select/SelectProducto";
import { useEffect } from 'react';
import { useForm } from './../hooks/useForm';

export const CrearSubasta = ({id, dispatch})=>{

    const [form, handleInputChange] = useForm({
        id_tipo_producto : 0,
        cantidad : 0
    });


    useEffect(()=>{
        console.log(JSON.stringify(id));

        const data = {
            type : 'add',
            payload : {
                id,
                id_tipo_producto,
                cantidad
            }
        }

        dispatch(data);
    },[])
    const {id_tipo_producto, cantidad} = form;

    const handleChange = async(e)=>{

        await handleInputChange(e);

        const data = {
            type : 'update',
            payload: {
                id,
                id_tipo_producto,
                cantidad
            }
        }

        dispatch(data);
    }

    return (
        <form>
            <p className="mt-1">Seleccionar producto:</p>
            <SelectProducto handleInputChange={handleChange} />
            <p className="mt-1">Cantidad:</p>
            <div className="row">
                <div className="col-11">
                    <input 
                        type="number" 
                        className="form-control"
                        name="cantidad"
                        value={cantidad}
                        onChange={handleChange} 
                    />
                </div>
                <div className="col-1">
                    <p> KG</p>
                </div>
            </div>
        </form>
    );
}