import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {

    let total = 0;
    let shipping = 0;
    for (const product of cart){
        total = total + product.price;
        shipping = shipping + product.shipping;
    }
    const tax = total * 7 / 100;
    const grandTotal = tax + total + shipping;
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
                        <p>$ {total.toFixed(2)}</p>
                        <p>$ {shipping.toFixed(2)}</p>
                        <p>$ {tax.toFixed(2)}</p>
                        <p>$ {grandTotal.toFixed(2)}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;