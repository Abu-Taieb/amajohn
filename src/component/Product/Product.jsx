import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import './Product.css';



const Product = (props) => {
    const showData = props?.product;
    const addToCart = props.addToCart;

    return (
        <div className='product'>
            <img src={showData?.img} alt="" />
            <h3>{showData?.name}</h3>
            <h4>Price : ${showData?.price}</h4>
            <p>Manufacturer : {showData?.seller}</p>
            <p>Rating : {showData?.ratings} start</p>
            <button onClick={() => addToCart(showData)} className='addToCart'>Add to Cart <FontAwesomeIcon icon={faCartShopping} />
            </button>
        </div>
    );
};

export default Product;