import React from 'react';
import './ShoppingBag.css';

const ShoppingBag = () => {
    return (
        <div className="shopping-bag">
            <img className="shopping-bag__img" alt="" src="/images/shopping-bag.png" />
            <div className="shopping-bag__count">0</div>
        </div>
    )
}

export default ShoppingBag;