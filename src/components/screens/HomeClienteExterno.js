import '../../styles/subasta-screen.css'
import { useHistory } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from './../contexts/UserContext';

export const HomeClienteExterno = ()=>{

    const {user} = useContext(UserContext);
    
    return(
    <body className="masthead bg text-black text-center">
        <div> 

             <div className="container mt-5"><img className="img-fluid d-block mx-auto mb-10" src="https://i.ibb.co/tMMpQrY/user.png" />
             <h3 className='display-4'>Bienvenido {user.nombre}</h3>
                <hr className="star-light" />

                <div className='mt-5'> <p className="display-6"> Presiona el botón <i className="fas fa-bars"></i> para ver las opciones</p> </div>
            </div>
        </div>
    </body> 
    )
}