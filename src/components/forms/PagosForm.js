import React from 'react'
import { useForm } from './../../hooks/useForm';
import Cards from 'react-credit-cards'
import 'react-credit-cards/es/styles-compiled.css'
import { useState, useContext } from 'react';
//import { env } from 'react-dotenv';
import { validarCompra } from './../../helpers/validarCompra';
import { UserContext } from './../contexts/UserContext';
import { VentaInternaContext } from './../contexts/VentaInternaContext';
import { createDetSol } from './../../helpers/createDetSol';
import { createSubasta } from './../../helpers/createSubasta';
import { listarTipoProducto } from './../../helpers/listarTipoProducto';
import { updateProducto } from './../../helpers/updateProducto';
import { useHistory } from 'react-router';
import { createDetVentaInterna } from './../../helpers/createDetVentaInterna';
import { createPago } from './../../helpers/createPago';
import { getProductoXId } from './../../helpers/getProductoXId';

export const PagosForm = () => {

    const {user} = useContext(UserContext);
    const {venta, dispatchVenta} = useContext(VentaInternaContext);

    const [validar, setValidar] = useState(false);

    const history = useHistory();

    //Guardar datos de la tarjeta con el hook useForm
    const [form, handleInputChange] = useForm({
        number: "",
        name: "",
        expiry: "",
        cvc: "",
        focus: ""
    })

    //Desestructurar datos de form
    const {
        number,
        name,
        expiry,
        cvc,
        focus
    } = form;

    //Mostrar el cvc en la parte trasera de la tarjeta
    const handleFocusChange = (e) => {

        //Simular un evento con el nombre focus y el valor del elemento html
        const data ={
            target:{
                name: 'focus',
                value: e.target.name
            }
        }

        //Guardar los datos con el hook useForm
        handleInputChange(data);
    }

    //Actualizar el numero de tarjeta
    const handleCardChange = (e)=>{

        const indicesDel = [4, 9, 14];        
        const indices = [5, 10, 15];

        //Agregar un espacio cuando se agregan 4 números
        if(indices.includes(e.target.value.length) && indices.includes(number.length + 1) || (indices.includes(e.target.value.length) && validar)){
            e.target.value = `${e.target.value.substring(0, e.target.value.length - 1)} ${e.target.value.substring(e.target.value.length - 1, e.target.value.length)}`
            setValidar(false);
        }
        
        handleInputChange(e);
    }

    const handleDateChange = (e)=>{

        if(e.target.value.length === 2 && expiry.length === 1){
            e.target.value = `${e.target.value}/` 
        }

        handleInputChange(e);
    }

    //Guardar pago
    const processPayment = async(e) => {
        e.preventDefault();

        console.log("number => ", number)
        console.log("name => ", name)
        console.log("expiry => ", expiry)
        console.log("cvc => ", cvc)
        console.log(JSON.stringify(form))

        if(validarCompra(number, name, expiry, cvc)){

            const solProd = await createDetSol(user.idUsuario, 1, 1);

            const {msg} = solProd;
    
            const listaSolProd = msg.split(" ");
    
            const idSolProd = listaSolProd[listaSolProd.length-1];

            const subasta = await createSubasta(user.idUsuario, idSolProd);

            const {msg : msgSub}  = subasta;

            const listaSub = msgSub.split(' ');

            const idSubasta = listaSub[listaSub.length-1];

            //Crear detalle venta x cada producto
            let precioTotal = 0;

            let cantTotal = 0;

            const listaVentaDelete = [];

            for(const ven of venta){

                listaVentaDelete.push(ven);

                const precio = ven.precio * ven.cantidad;

                precioTotal = precioTotal + precio;

                await createDetVentaInterna(ven.idProducto, ven.cantidad, precio, idSubasta );

                const tiposProductos = await listarTipoProducto();

                let idTipoProducto = 0;

                const cant = ven.stock - ven.cantidad;

                cantTotal = cantTotal + cant;

                for(const tp of tiposProductos){
                    if(tp.descripcion === ven.nombre){
                        idTipoProducto = tp.idTipoProducto;
                    }
                }

                const editProd = await getProductoXId(ven.idProducto);

                await updateProducto(editProd.idProducto, cant, ven.precio, cant, user.id, idTipoProducto, editProd.img);
            }


            const arrayTarjeta = number.split(' ');

            const nroTarjeta = `${arrayTarjeta[0]}${arrayTarjeta[1]}${arrayTarjeta[2]}${arrayTarjeta[3]}`;

            await createPago(Number(idSubasta), precioTotal, Number(nroTarjeta), 81);

            for(const ven of listaVentaDelete){
                const action = {
                    type: 'delete',
                    payload : ven.idProducto
                }

                dispatchVenta(action);
            }

            alert('Venta realizada');

            history.push('/market');

        }
    }

    return (
        <form className="card mx-auto">
            <div className="card-body">
                <Cards
                    number={number}
                    name={name}
                    //expiry={fecha}
                    expiry={expiry}
                    cvc={cvc}
                    focused={focus}
                />
                <form>
                    <div className="form-group">
                        <label htmlFor="number">Número de la tarjeta</label>
                        <input
                            type="text"
                            name="number"
                            id="number"
                            value={number}
                            maxLength="19"
                            //Solo aceptar numeros en un elemento text
                            pattern="\d*"
                            className="form-control"
                            onChange={handleCardChange}
                            onFocus={handleFocusChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Nombre Completo</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            value={name}
                            maxLength="30"
                            className="form-control"
                            onChange={handleInputChange}
                            onFocus={handleFocusChange}
                        />
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="expiry">Fecha de expiración</label>
                            <input
                                type="text"
                                name="expiry"
                                id="expiry"
                                //Solo aceptar numeros en un elemento text
                                pattern="\d*"
                                value={expiry}
                                maxLength="5"
                                className="form-control"
                                onChange={handleDateChange}
                                onFocus={handleFocusChange}
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="cvc">CVC</label>
                            <input
                                type="text"
                                name="cvc"
                                id="cvc"
                                value={cvc}
                                maxLength="3"
                                className="form-control"
                                //Solo aceptar numeros en un elemento text
                                pattern="\d*"
                                onChange={handleInputChange}
                                onFocus={handleFocusChange}
                            />
                        </div>
                    </div>

                    <button type="submit" className="btn btn-success btn-block btn-lg mt-2" onClick={processPayment}>Pagar</button>
                </form>
            </div>
        </form>
    )
}
