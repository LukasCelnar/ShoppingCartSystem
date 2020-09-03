import React from 'react';
import './ShoppingBag.css';
import { useSelector } from 'react-redux';
import history from '../../history';

const ShoppingBag = () => {
    const cart = useSelector(state => state.cart)

    const onBagClick = () => {
        history.push("/cart")
    }

    return (
        <div className="shopping-bag" onClick={() => onBagClick()}>
            <img className="shopping-bag__img" alt="" src="/images/shopping-bag.png" />
            <div className="shopping-bag__count">{cart.length}</div>
        </div>
    )
}

export default ShoppingBag;