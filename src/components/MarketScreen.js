import React from 'react'
import '../styles/landingstyles.css'
import { FichaProducto } from './FichaProducto'
import { NavBar } from './NavBar'

export const MarketScreen = () => {

    const listaProductos = [
        {
            nombre: 'Manzana',
            precio: 1000,
            descripcion: 'Fruta dulce y harinosa',
            stock: 100,
            img: 'https://cdn.discordapp.com/attachments/650501558437675042/888876601956265994/pngfind.com-apples-png-372458.png'
        },
        {
            nombre: 'Manzana',
            precio: 1000,
            descripcion: 'Fruta dulce y harinosa',
            stock: 100,
            img: 'https://cdn.discordapp.com/attachments/650501558437675042/888876601956265994/pngfind.com-apples-png-372458.png'
        },
        {
            nombre: 'Manzana',
            precio: 1000,
            descripcion: 'Fruta dulce y harinosa',
            stock: 100,
            img: 'https://cdn.discordapp.com/attachments/650501558437675042/888876601956265994/pngfind.com-apples-png-372458.png'
        },
        {
            nombre: 'Manzana',
            precio: 1000,
            descripcion: 'Fruta dulce y harinosa',
            stock: 100,
            img: 'https://cdn.discordapp.com/attachments/650501558437675042/888876601956265994/pngfind.com-apples-png-372458.png'
        },
        {
            nombre: 'Manzana',
            precio: 1000,
            descripcion: 'Fruta dulce y harinosa',
            stock: 100,
            img: 'https://cdn.discordapp.com/attachments/650501558437675042/888876601956265994/pngfind.com-apples-png-372458.png'
        },
        {
            nombre: 'Manzana',
            precio: 1000,
            descripcion: 'Fruta dulce y harinosa',
            stock: 100,
            img: 'https://cdn.discordapp.com/attachments/650501558437675042/888876601956265994/pngfind.com-apples-png-372458.png'
        },
        {
            nombre: 'Manzana',
            precio: 1000,
            descripcion: 'Fruta dulce y harinosa',
            stock: 100,
            img: 'https://cdn.discordapp.com/attachments/650501558437675042/888876601956265994/pngfind.com-apples-png-372458.png'
        },
        {
            nombre: 'Manzana',
            precio: 1000,
            descripcion: 'Fruta dulce y harinosa',
            stock: 100,
            img: 'https://cdn.discordapp.com/attachments/650501558437675042/888876601956265994/pngfind.com-apples-png-372458.png'
        },
        {
            nombre: 'Manzana',
            precio: 1000,
            descripcion: 'Fruta dulce y harinosa',
            stock: 100,
            img: 'https://cdn.discordapp.com/attachments/650501558437675042/888876601956265994/pngfind.com-apples-png-372458.png'
        },
        {
            nombre: 'Manzana',
            precio: 1000,
            descripcion: 'Fruta dulce y harinosa',
            stock: 100,
            img: 'https://cdn.discordapp.com/attachments/650501558437675042/888876601956265994/pngfind.com-apples-png-372458.png'
        }
    ];

    return (
        <div>
            <NavBar />
            {
                listaProductos.map( producto =>{
                    return <FichaProducto 
                        nombre={producto.nombre}
                        precio={producto.precio}
                        descripcion={producto.descripcion}
                        stock={producto.stock}
                        img={producto.img} 
                    />
                })
            }
        </div>
    );
}
