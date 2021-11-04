import React from 'react'
import { NavBar } from '../NavBar';
import '../../styles/productos.css'

export const ProductoScreen = ({nombre, precio, stock, img, descripcion}) => {
    return (
        <div>
            <NavBar />
            <div className="card producto">
                <img className="card-img-top img-manzana-screen" src="https://cdn.discordapp.com/attachments/650501558437675042/888876601956265994/pngfind.com-apples-png-372458.png" />
                <div className="card-body">
                    <p>Nombre:</p>
                    <p>Precio:</p>
                    <p>Stock:</p>
                </div>
            </div>

            <div className="text-center">
                <div className="number-choose mt-3 inline">
                    <div>
                        <input width="100px" type="number" className="form-control" />
                    </div>
                    <div>
                        <p>KG</p>
                    </div>
                    <div>
                        <button type="button" className="btn btn-primary mt-3 mb-3">Agregar al carro</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
