import React from 'react'

export const SubastasProductorScreen = () => {
    return (
        <div>
            <div className="text-center">
                <p className="display-4">Subastas Disponibles</p>
            </div>
            <hr />
            <div className="container-fluid">
                <ul className="list-group text-center">
                    <li className="list-group-item list-group-item-action list-group-item-light btn">Subasta 1 21-05-2021</li>
                    <li className="list-group-item list-group-item-action list-group-item-light btn">Subasta 2 18-07-2021</li>
                    <li className="list-group-item list-group-item-action list-group-item-light btn">Subasta 3 08-02-2021</li>
                </ul>
            </div>
        </div>
    )
}
