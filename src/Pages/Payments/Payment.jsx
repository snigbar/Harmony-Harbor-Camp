import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import UseCarts from "../../Hooks/useCarts";
import { useParams } from "react-router-dom";
import Checkout from "./Checkout";
import { useState } from "react";


// TODO: provide publishable Key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);


const Payment = () => {

    
    const [cart] = UseCarts();
    const {id} = useParams()
    const selectedCart = cart.find(el => el._id === id)
    const {price,className,instructorName} = selectedCart
    return (
          <div className='w-4/6 mx-auto'>
            <h1 className="text-xl text-center my-4">Proceed to pay</h1>
            <div className="flex justify-between mb-4">
                <p>Total ${price}</p>
                <p>Class Name: {className}</p>
                <p>Instructed By: {instructorName}</p>
            </div>
            <Elements stripe={stripePromise}>
                <div className="bg-slate-50 p-2 flex justify-center items-center">
                <Checkout cart={selectedCart} price={price}></Checkout>
                </div>
            </Elements>
        </div>
    );
};

export default Payment;