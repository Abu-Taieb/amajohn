import React from 'react';
import './Product.css';

const Product = (props) => {
    const showData = props?.product;
    return (
        <div className='product'>
            <img src={showData?.img} alt="" />
            <h3>{showData?.name}</h3>
            <h4>Price : ${showData?.price}</h4>
            <p>Manufacturer : {showData?.seller}</p>
            <p>Rating : {showData?.ratings} start</p>
            <button className='addToCart'>Add to Cart</button>
        </div>
    );
};

export default Product;