import '../../styles/subasta-screen.css'
import { useHistory } from 'react-router-dom';

export const HomeClienteExterno = ()=>{

    const history = useHistory();

    const handleSubasta = ()=>{
        history.push('/subasta');
    }

    const handleListaSubasta = () =>{
        history.push('/lista-subastas');
    }

    return(
        <div>
            <div className="text-center">
                <p className="display-4">
                    Home Cliente Externo
                </p>
            </div>
            <div className="formulario-subasta mt-5">
                <div className="row">
                    <div className="col-6 text-center">
                        <button className="btn btn-primary boton-subastas" onClick={handleListaSubasta}>Ver subastas propias</button>
                    </div>
                    <div className="col-6 text-center">
                        <button className="btn btn-primary boton-subastas" onClick={handleSubasta}>Crear Subasta</button>
                    </div>
                </div>
            </div>
        </div>
    )
}