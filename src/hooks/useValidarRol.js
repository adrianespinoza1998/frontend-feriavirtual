import { useHistory } from "react-router-dom";

export const useValidarRol = ()=>{

    const history = useHistory();

    const validar = (usuario)=>{
        if(usuario === null || usuario === undefined){
            history.push('/login');
        }else{
            const idRol = usuario.idRol;
    
            console.log(JSON.stringify(usuario));
            console.log(idRol);

            switch(idRol){
                case 2:
                    history.push('/productor');
                    break;
                case 3:
                    history.push('/transporte');
                    break;
                case 4:
                    history.push('/market');
                    break;
                case 5:
                    history.push('/externo');
                    break;
                default:
                    history.push('/login');
                    break;
            }
        }
    }

    return [validar];

}