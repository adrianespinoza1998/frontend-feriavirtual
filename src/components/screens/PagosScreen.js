import React from 'react'
import { PagosForm } from '../forms/PagosForm'
/*import { loadStripe } from '@stripe/stripe-js';
import env from "react-dotenv";*/

export const PagosScreen = () => {

    //const stripe = loadStripe(env.STRIPE_PUBLIC_KEY);
    return (
        <div>
            <div className="text-center">
                <p className="display-4">Datos de pago</p>
            </div>
            <hr />
            <div className="container">
                <PagosForm />
            </div>
        </div>
    )
}
