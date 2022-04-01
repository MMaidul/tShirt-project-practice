import React from 'react';
import './TShirt.css';

const TShirt = ({ handleAddToCart, tShirt }) => {
    const { picture, name, price } = tShirt;

    return (
        <div className='t-shirts'>
            <img src={picture} alt="" />
            <h2>{name}</h2>
            <p>price: ${price}</p>
            <button onClick={() => { handleAddToCart(tShirt) }}>Add To Cart</button>
        </div>
    );
};

export default TShirt;
