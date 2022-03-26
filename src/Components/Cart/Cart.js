import React from 'react';
import './Cart.css';
const Cart = ({cart}) => {
    return (
        <div>
            <h2>Order Summary</h2>
            <p>Selected items: {cart.length}</p>
            <p>Total price: $ {}</p>
            <p>Total shipping charge: $ </p>
            <p>Tax: </p>
            <h4>Grand total: $</h4>
        </div>
    );
};

export default Cart;