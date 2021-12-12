import React from 'react'
import { useHistory } from "react-router-dom";
import '../../styles/landingstyles.css'

export const LandingScreen = () => {

    const history = useHistory();

    const toLogin = ()=>{
        history.push('/login');
    }

    return (
        <div className="pantalla">
           <img className="img-logo" src="https://cdn.discordapp.com/attachments/650501558437675042/918928622277001286/41_feria_virtual-finallllllllllllll.png" alt="logo.png"  />

            <hr />

            <div >
                    <img className="img-maipo" src="https://cdn.discordapp.com/attachments/650501558437675042/918925615996993556/MAIPO_GRANDE-final_landing.png" alt="maipo-grande.png" />
                </div>
            <div className="row">
                <div className="col-6">

                    <div className="text-center p-2">
                <button className=" button btn btn-primary btn-lg" type="button" onClick={toLogin}>Ingresar</button>
            </div>
                </div>
            </div>
            <footer class="footer text-faded text-center py-3">
    <div class="container">
        <p className="m-0 small">Copyright © Maipo Grande 2021</p>
    </div>
</footer>             
                    </div>
               
            
        
    )
}



