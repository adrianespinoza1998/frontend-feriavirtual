import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from './../contexts/UserContext';

export const ProductorScreen = ()=>{

    const {user} = useContext(UserContext);

    return(
        <div> <body class="masthead bg text-black text-center">
        <div className="container mt-5"><img class="img-fluid d-block mx-auto mb-10" src="https://i.ibb.co/tMMpQrY/user.png" />
           <p className="display-4">
           <h3>Bienvenido {user.nombre}</h3>
               </p>
           <hr className="star-light" />
           
           <div className='mt-5'> <p className="display-6"> Presiona el botón <i className="fas fa-bars"></i> para ver las opciones</p> </div>
       </div>
   </body>
</div>
       
   )
}
