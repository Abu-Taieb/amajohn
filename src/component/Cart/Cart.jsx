import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
    return (
        <div className='cart-container'>
            <div className="cart-inner-container">
                <h4>Order Summery</h4>
                <hr className='horizontal' />
                <div className="cart">
                    <div className="">
                        <p>Selected Items</p>
                        <p>Total Price</p>
                        <p>Total Shipping</p>
                        <p>Tax</p>
                        <p>Grand Total</p>
                    </div>
                    <div className="cart-clone">
                        <p>:</p>
                        <p>:</p>
                        <p>:</p>
                        <p>:</p>
                        <p>:</p>
                    </div>
                    <div className="">
                        <p>{cart.length}</p>
                        <p>{cart.length}</p>
                        <p>{cart.length}</p>
                        <p>{cart.length}</p>
                        <p>{cart.length}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;