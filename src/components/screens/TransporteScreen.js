import { useHistory } from "react-router-dom";

export const TransporteScreen = ()=>{

    let usuario;
    const history = useHistory();

    if(localStorage.getItem('user')==null){
        history.push('/login');
    }else{
        usuario = JSON.parse(localStorage.getItem('user'));
        if(usuario.idRol !== 3){
            history.push('/login');
        }
    }

    return(
        <div>
            <p>TransporteScreen</p>
        </div>
    );
}