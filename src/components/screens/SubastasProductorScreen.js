import React from 'react'
import { useState, useEffect } from 'react';
import { listarSubastasXEstadoTipo } from './../../helpers/listarSubastasXEstadoTipo';
import { useHistory } from 'react-router-dom';

export const SubastasProductorScreen = () => {

    const history = useHistory();

    const [subastas, setSubastas] = useState([]);

    const [idSubIni, setIdSubIni] = useState(0)

    const fetchData = async()=>{
        const listaSub = await listarSubastasXEstadoTipo(1,2);

        setSubastas(listaSub);

        setIdSubIni( listaSub[0].idSubastas -1);
    }

    useEffect(()=>{
        fetchData();
    }, []);

    const handleSubasta = (id)=>{
        history.push(`/det-sub/${id}`);
    }

    return (
        <div className="container mb-5">
            <div className="text-center">
                <p className="display-4">Subastas Disponibles</p>
            </div>
            <hr />
            <div className="container-fluid">
                <ul className="list-group text-center">
                    {
                        subastas.map(sub=>{
                            return <li 
                                        key={sub.idSubastas}
                                        className="list-group-item list-group-item-action list-group-item-light btn"
                                        onClick={()=>{handleSubasta(sub.idSolicitudProductos)}}
                                    >
                                        {`Subasta ${sub.idSubastas - idSubIni} - Tipo de  solicitud : ${sub.tipoSolicitud}`}
                                    </li>
                        })
                    }
                </ul>
            </div>
        </div>
    )
}
