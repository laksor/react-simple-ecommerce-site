import React from 'react';
import './Product.css';

const Product = (props) => {
    const {name, price, seller, ratings, img} = props.product;
    return (
        <div className='big-div'>
            <div className='products-info'>
                <img src={img}></img>
                <h3>{name}</h3>
                <h4>Price: ${price}</h4>
                <h6>Manufacturer: {seller}</h6>
                <p>Rating: {ratings}</p>
            </div>
            <button  onClick={ () => props.handleAddToCart(props.product)} className='btn-cart'>Add to cart</button>
        </div>
    );
};

export default Product;