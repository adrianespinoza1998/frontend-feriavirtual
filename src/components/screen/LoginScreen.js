import React from 'react'
import { LoginForm } from '../forms/LoginForm';

import '../../styles/loginstyles.css'

export const LoginScreen = () => {
    return (
        <div className="formulario-login">
            <LoginForm/>
        </div>
    );
}
