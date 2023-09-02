import React, { useState } from 'react';
import Cart from '../cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css'
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';

const Orders = () => {
    const shavedcart = useLoaderData();

    const [cart, setCart] = useState(shavedcart)

    const deleteFromCart = (id) =>{
        const remainingPd = cart.filter(pd => pd.id !== id);
        setCart(remainingPd);
        removeFromDb(id)  
    }

    const deleteAllFromCart = () => {
        setCart([])
        deleteShoppingCart();
    }
    return (
        <div className='shop-container'>
            <div  className="reviewContainer">
                {
                    cart.map(product => <ReviewItem
                    key={product.id}
                    product={product}
                    deleteFromCart={deleteFromCart}
                    ></ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}
                deleteAllFromCart= {deleteAllFromCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Orders;