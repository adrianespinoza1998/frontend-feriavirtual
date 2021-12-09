import '../../styles/subasta-screen.css';
import { useState, useEffect } from 'react';
import { listarSubastas } from './../../helpers/listarSubastas';
import { useContext } from 'react';
import { UserContext } from './../contexts/UserContext';
import { useHistory } from 'react-router-dom';

export const ListaSubastas = ()=>{

    const history = useHistory();

    const [subastas, setSubastas] = useState([]);

    const {user} = useContext(UserContext);

    const [idSubIni, setIdSubIni] = useState(0)

    const fetchData = async()=>{
        const lista = await listarSubastas(user.idUsuario);

        setSubastas(lista);

        setIdSubIni( lista[0].idSubastas -1);
    }

    useEffect(()=>{
        fetchData();
    },[]);

    const handleSubasta = (idSolProd)=>{
        history.push(`/seleccion-post/${idSolProd}`)
    }

    return(
        <div>
            <div className="formulario-subasta">
                <div className="text-center">
                    <p className="display-4">Lista Subastas</p>
                </div>
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