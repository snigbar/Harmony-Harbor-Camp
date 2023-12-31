import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import './Checkout.css'

import useAxiosSecure from "../../Hooks/UseAxiosSecure";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Checkout = ({ cart,price,clientSecret}) => {
const stripe = useStripe();
const elements = useElements();
const { user } = useContext(AuthContext);
const [axiosSecure] = useAxiosSecure()
const [cardError, setCardError] = useState('');
const [processing, setProcessing] = useState(false);
const [transactionId, setTransactionId] = useState('');
const navigate = useNavigate()


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }

        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('error', error)
            setCardError(error.message);
        }
        else {
            setCardError('');
           
        }

        setProcessing(true)

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous'
                    },
                },
            },
        );

        if (confirmError) {
            console.log(confirmError);
        }

      
        setProcessing(false)
        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id);
            // save payment information to the server
            const payment = {
                email: user?.email,
                transactionId: paymentIntent.id,
                price,
                date: new Date(),
                cartId: cart._id,
                status: 'service pending',
                className: cart.className,
                classId: cart.classId
            }
            axiosSecure.post('/payments', payment)
                .then(res => {

                    if (res.data.insertResult.insertedId) {
                        Swal.fire({
                            title: `Payment Completed, TransactionID:${paymentIntent.id}`,
                            showClass: {
                                popup: 'animate__animated animate__fadeInDown'
                            },
                            hideClass: {
                                popup: 'animate__animated animate__fadeOutUp'
                            }
                        });
                        navigate('/dashboard/myclasses');   
                    }
                })
        }


    }

    return (
        <>
            <form className="w-2/3 m-8" onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn btn-primary mt-4" type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay 
                </button>
            </form>
            {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
            {transactionId && <p className="text-green-500">Transaction complete with transactionId: {transactionId}</p>}
        </>
    );
};

export default Checkout;