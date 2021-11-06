import { NavBar } from './../NavBar';
import { useHistory } from "react-router-dom";

export const ProductorScreen = ()=>{

    let usuario;
    const history = useHistory();

    if(localStorage.getItem('user')==null){
        history.push('/login');
    }else{
        usuario = JSON.parse(localStorage.getItem('user'));
        if(usuario.idRol !== 2){
            history.push('/login');
        }
    }

    return(
        <div>
            <NavBar />
            <p>ProductorScreen</p>
        </div>
    );
}