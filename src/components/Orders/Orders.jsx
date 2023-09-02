import React, { useState } from 'react';
import Cart from '../cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css'
import { removeFromDb } from '../../utilities/fakedb';

const Orders = () => {
    const shavedcart = useLoaderData();

    const [cart, setCart] = useState(shavedcart)
    // console.log(shavedcart);

    const deleteFromCart = (id) =>{
        // console.log(id);
        const remainingPd = cart.filter(pd => pd.id !== id);
        setCart(remainingPd);
        removeFromDb(id)
        // setCart()
        // const remaining = cart.filter(pd => pd.id !== id);
        // setCart(remaining);
        
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
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;