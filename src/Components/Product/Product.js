import React from 'react';
import './Product.css';
const Product = (props) => {
    const {name, price, seller, ratings, img} = props.product;
    return (
        <div className='products'>
            <img src={img}></img>
            <h1>{name}</h1>
            <h3>Price: ${price}</h3>
            <p>Manufacturer: {seller}</p>
            <p>Rating: {ratings}</p>
            <button>Add to cart</button>
        </div>
    );
};

export default Product;