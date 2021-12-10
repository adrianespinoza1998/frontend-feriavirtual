import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/navbar.css'
import { useHistory } from 'react-router-dom';
import { useContext, useState } from 'react';
import { UserContext } from './contexts/UserContext';
import { slide as Menu } from 'react-burger-menu';

export const NavBar = () => {

    const history = useHistory();

    const {user} = useContext(UserContext);

    const handleCloseSesion = ()=>{
        if(localStorage.getItem('user') !==null){
            localStorage.removeItem('user');
        }
        history.push('/login');
    }

    const [toggle, setToggle] = useState(false);

    const handleToggle = ()=>{

        setToggle(!toggle);
    }

    const buttonProductor = [
        {   
            nombre : 'Crear Producto',
            function : ()=>{
                history.push('/crear-prod');
                setToggle(false);
            }
        },
        {
            nombre: 'Participar en subastas',
            function : ()=>{
                history.push('/sub-productor');
                setToggle(false);
            }
        },
        {
            nombre: 'Editar Usuario',
            function : ()=>{
                console.log('Hola');
                setToggle(false);
            }
    }];

    const buttonSubasta = [
    {
        nombre : 'Ver subastas propias',
        function : ()=>{
            history.push('/lista-subastas');
            setToggle(false);
        }
    },
    {
        nombre : 'Crear Subasta',
        function : ()=>{
            history.push('/subasta');
            setToggle(false);
        }
    },
    {
        nombre : 'Editar Usuario',
        function : ()=>{
            console.log('Funca');
            setToggle(false);
        }
    }];

    const buttonMarket = [
    {
        nombre : 'Editar Usuario',
        function : ()=>{
            console.log('Funca');
            setToggle(false);
        }
    }];

    const optionSidebar = ()=>{
        switch(user.idRol){
            case 2:
                return buttonProductor;
            case 4:
                return buttonMarket;
            case 5:
                return buttonSubasta;
            default:
                return buttonMarket;
        }
    }

    const handleHome = ()=>{
        switch(user.idRol){
            case 2:
                history.push('/productor');
                break;
            case 4:
                history.push('/market');
                break;
            case 5:
                history.push('/externo');
                break;
            default:
                break;
        }
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <button className="btn btn-dark burger" onClick={handleToggle}><i className="fas fa-bars"></i></button>
                    
                    <a class="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0">
                    <img class="img-fluid" src="https://cdn.discordapp.com/attachments/650501558437675042/918928622277001286/41_feria_virtual-finallllllllllllll.png" /> </a>

                    <div className="row">
                        {
                            (user.idRol === 4) &&
                            <div className="col-4">
                                <Link className="nav-link text-light" to="/comprar"><i className="fas fa-cart-plus"></i></Link>
                            </div>
                        }
                        <div className="col-4">
                            <button className="btn btn-dark" onClick={handleHome}><i className="fas fa-home"></i></button>
                        </div>
                        <div className="col-4">
                            <button className="nav-link text-light btn btn-dark" onClick={handleCloseSesion}><i className="fas fa-sign-out-alt"></i></button>
                        </div>
                    </div>
                </div>

            </nav>
            <Menu isOpen={false} className="bg-dark">
                {
                    optionSidebar().map((btn,index) =>{
                        return <div key={index} className="text-center"><button className="btn btn-dark boton-sidebar" onClick={()=>{btn.function()}}>{btn.nombre}</button></div>
                    })
                }
            </Menu>
        </div>
    )
}
