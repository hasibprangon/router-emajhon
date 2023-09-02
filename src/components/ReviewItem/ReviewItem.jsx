import React from 'react';
import './ReviewItem.css'
import {TrashIcon } from '@heroicons/react/24/solid'
const ReviewItem = ({ product, deleteFromCart }) => {
    const { id, name, img, price, shipping } = product;
    return (
        <div className='reviewItem'>
            <img src={img} alt="" />
            <div className='productInfo'>
                <p className='productTitle'>{name}</p>
                <p>Price: <span className='orangeColor'>${price}</span></p>
                <p>Shipping: <span className='orangeColor'>${shipping}</span></p>
            </div>
            <button onClick={() => deleteFromCart(id)} className='btn-delet'><TrashIcon/></button>
        </div>
    );
};

export default ReviewItem;