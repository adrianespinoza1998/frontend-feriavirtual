import React from 'react';
import { SignInForm } from '../forms/SignInForm';

export const SignInScreen = ()=>{
    return (
        <div>
            <div className="text-center">
                <p className="display-4">Formulario de registro</p>
            </div>
            <SignInForm />
        </div>
    )
}