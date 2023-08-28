import React from 'react';
import Cart from '../cart/Cart';
import { useLoaderData } from 'react-router-dom';

const Orders = () => {
    const cart = useLoaderData();
    // console.log(products);
    return (
        <div className='shop-container'>
            <div  className="products-container">
                <h2>This is orders page:{cart.length}</h2>
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;