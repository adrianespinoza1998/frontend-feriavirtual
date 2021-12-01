import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/navbar.css'
import { useHistory } from 'react-router-dom';

export const NavBar = () => {

    const history = useHistory();

    const handleCloseSesion = ()=>{
        if(localStorage.getItem('user') !==null){
            localStorage.removeItem('user');
        }
        history.push('/login');
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="nav-link text-light" to="/market"><i className="fas fa-home"></i></Link>
                <p className="text-light texto-nav">Feria Virtual</p>

                <div className="row">
                    <div className="col-6">
                        <Link className="nav-link text-light" to="/comprar"><i className="fas fa-cart-plus"></i></Link>
                    </div>
                    <div className="col-6">
                        <button className="nav-link text-light btn btn-dark" onClick={handleCloseSesion}><i className="fas fa-sign-out-alt"></i></button>
                    </div>
                </div>
            </div>
        </nav>
    )
}
