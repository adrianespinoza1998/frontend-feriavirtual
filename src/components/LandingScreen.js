import React from 'react'
import '../styles/landingstyles.css'

export const LandingScreen = () => {
    return (
        <div>
            <h1 className="text-center display-4">Feria Virtual</h1>

            <hr />

            <div className="row">
                <div className="col-6">
                    <p className="texto">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                        occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <div className="col-6">
                    <img className="img-manzana" src="https://cdn.discordapp.com/attachments/650501558437675042/888876601956265994/pngfind.com-apples-png-372458.png" />
                </div>
            </div>
            <div className="text-center p-2">
                <button className="btn btn-secondary" type="button">Ingresar</button>
            </div>
        </div>
    )
}
