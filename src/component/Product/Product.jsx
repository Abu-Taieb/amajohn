import React from 'react';
import './Product.css';

const Product = (props) => {
    const showData = props?.product;
    return (
        <div className='product'>
            <img src={showData?.img} alt="" />
            <h5>{showData?.name}</h5>
            <h5>Price : ${showData?.price}</h5>
        </div>
    );
};

export default Product;