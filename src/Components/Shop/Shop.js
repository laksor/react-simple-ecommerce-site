import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect( () =>{
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    } , [])

    const handleAddToCart = (product) =>{
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                        ></Product>)
                }
            </div>
            <div className="cart-container">
                <h2>Order Summary</h2>
                <p>Selected items: {cart.length} </p>
                <p>Total price: $ {}</p>
                <p>Total shipping charge: $ </p>
                <p>Tax: </p>
                <h4>Grand total: $</h4>
            </div>
        </div>
    );
};

export default Shop;