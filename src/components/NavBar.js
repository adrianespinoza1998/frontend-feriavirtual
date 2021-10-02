import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/navbar.css'

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="nav-link text-light" to="/market"><i className="fas fa-home"></i></Link>
                <p className="text-light texto-nav">Productos disponibles</p>

                <div className="row">
                    <div className="col-6">
                        <Link className="nav-link text-light" to="/home"><i className="fas fa-cart-plus"></i></Link>
                    </div>
                    <div className="col-6">
                        <Link className="nav-link text-light" to="/login"><i className="fas fa-sign-out-alt"></i></Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}
