import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import UseCarts from "../../Hooks/useCarts";
import { useParams } from "react-router-dom";
import Checkout from "./Checkout";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/UseAxiosSecure";


// TODO: provide publishable Key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);


const Payment = () => {

    
    const [cart] = UseCarts();
    const {id} = useParams()
    const selectedCart = cart.find(el => el._id === id)
    const [axiosSecure] = useAxiosSecure()
    const {price,className,instructorName} = selectedCart
    const [clientSecret, setClientSecret] = useState('');


    useEffect(() => {
        if (price > 0) {
        axiosSecure.post('/create-payment-intent', { price })
        .then(res => {
        setClientSecret(res.data.clientSecret);
        })
        }
        }, [price,axiosSecure])
    

    return (
          <div className='w-4/6 mx-auto'>
            <h1 className="text-xl text-center my-4">Proceed to pay</h1>
            <div className="flex justify-between mb-4">
                <p>Total ${price}</p>
                <p>Class Name: {className}</p>
                <p>Instructed By: {instructorName}</p>
            </div>
            <Elements stripe={stripePromise}>
                <div className="bg-slate-50 dark:bg-gray-900 p-2 flex justify-center items-center">
                <Checkout cart={selectedCart} price={price} clientSecret={clientSecret}></Checkout>
                </div>
            </Elements>
        </div>
    );
};

export default Payment;