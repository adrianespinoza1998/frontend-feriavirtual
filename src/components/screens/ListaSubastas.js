import '../../styles/subasta-screen.css';
import { useState, useEffect } from 'react';
import { listarSubastas } from './../../helpers/listarSubastas';
import { useContext } from 'react';
import { UserContext } from './../contexts/UserContext';
import { useHistory } from 'react-router-dom';

export const ListaSubastas = ()=>{

    const options = { year: 'numeric', month: 'long', day: 'numeric' };

    const history = useHistory();

    const [subastas, setSubastas] = useState([]);

    const {user} = useContext(UserContext);

    const [idSubIni, setIdSubIni] = useState(0);

    const fetchData = async()=>{
        const lista = await listarSubastas(user.idUsuario);

        const listaAceptados = lista.filter(sub=> sub.tipoSolicitud === 'EXTERNA' && sub.estadoSolicitud === 'ACEPTADA');

        setSubastas(listaAceptados);

        if(listaAceptados.length>0){
            setIdSubIni( listaAceptados[0].idSubastas -1);
        }
    }

    useEffect(()=>{
        fetchData();
    },[]);

    const handleSubasta = (idSolProd, idSubastas)=>{
        localStorage.setItem('idSubastas', idSubastas);
        history.push(`/seleccion-post/${idSolProd}`)
    }

    return(
        <div>
            <div className="formulario-subasta">
                <div className="text-center">
                    <p className="display-4">Lista Subastas</p>
                </div>
                <hr />
                <ul className="list-group text-center">
                    {
                        (subastas.length>0)
                        ?
                        subastas.map(sub=>{
                            return <li 
                                        key={sub.idSubastas}
                                        className="list-group-item list-group-item-action list-group-item-light btn"
                                        onClick={()=>{handleSubasta(sub.idSolicitudProductos, sub.idSubastas)}}
                                    >
                                        {`Subasta ${sub.idSubastas} - Fecha : ${(sub.fecha!==null) ? new Date(sub.fecha).toLocaleDateString("es-ES", options) : 'No registrada'}`}
                                    </li>
                        })
                        : <p className='display-4'>No hay subastas aprobadas</p>
                    }
                </ul>
            </div>
        </div>
    )
}