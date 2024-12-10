import React from 'react';
import { useLocation } from 'react-router-dom';
import { PaystackButton } from 'paystack-react';
import axios from 'axios';

const CheckoutPage = () => {
    const { state } = useLocation();
    const cart = state?.cart || [];

    const totalAmount = cart.reduce((sum, item) => sum + item.price, 0);

    const handlePaymentSuccess = async (reference) => {
        const order = {
            reference,
            items: cart,
            total: totalAmount,
        };
        await axios.post('http://localhost:5000/orders', order);
        alert('Payment Successful! Confirmation sent to your email.');
    };

    return (
        <div>
            <h1>Checkout</h1>
            <ul>
                {cart.map((item, index) => (
                    <li key={index}>
                        {item.name} - ${item.price}
                    </li>
                ))}
            </ul>
            <h3>Total: ${totalAmount}</h3>
            <PaystackButton
                email="customer@example.com"
                amount={totalAmount * 100}
                publicKey="your-paystack-public-key"
                onSuccess={handlePaymentSuccess}
            />
        </div>
    );
};

export default CheckoutPage;
