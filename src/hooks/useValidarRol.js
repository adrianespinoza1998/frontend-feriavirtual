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
                    history.replace('/productor');
                    break;
                case 3:
                    history.replace('/transporte');
                    break;
                case 4:
                    history.replace('/market');
                    break;
                case 5:
                    history.replace('/externo');
                    break;
                default:
                    history.replace('/login');
                    break;
            }
        }
    }

    return [validar];

}