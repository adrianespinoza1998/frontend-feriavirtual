import React from 'react'
import { EditUserForm } from '../forms/EditUserForm'

export const EditarUsuarioScreen = () => {

    return (
        <div className='container'>
            <div className='text-center'>
                <p className='display-4'>Editar Usuario</p>
            </div>
            <hr/>
            <EditUserForm className='mt-5' />
        </div>
    )
}
