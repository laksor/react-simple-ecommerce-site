import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const {cart} = props;
    let total = 0;
    let shipping = 0;
    for(const product of cart){
        total = total + product.price;
        shipping = shipping + product.shipping;
    }
    const tax = total * 0.1;
    const grandTotal = total + shipping + tax;
    return (
        <div className='cart'>
            <h2>Order Summary</h2>
            <p>Selected items: {cart.length}</p>
            <p>Total price: ${total}</p>
            <p>Total shipping charge: ${shipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h4>Grand total: ${grandTotal.toFixed(2)}</h4>
        </div>
    );
};

export default Cart;