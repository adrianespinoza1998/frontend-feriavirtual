import { NavBar } from "../NavBar"

import '../../styles/subasta-screen.css';

export const ListaSubastas = ()=>{

    return(
        <div>
            <NavBar />
            <div className="formulario-subasta">
                <div className="text-center">
                    <p className="display-4">Lista Subastas</p>
                </div>
                <ul className="list-group text-center">
                    <li className="list-group-item list-group-item-action list-group-item-light btn">Subasta 1 21-05-2021</li>
                    <li className="list-group-item list-group-item-action list-group-item-light btn">Subasta 2 18-07-2021</li>
                    <li className="list-group-item list-group-item-action list-group-item-light btn">Subasta 3 08-02-2021</li>
                </ul>
            </div>
        </div>
    )
}