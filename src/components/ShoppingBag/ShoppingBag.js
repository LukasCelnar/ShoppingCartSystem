import React, { useEffect } from 'react';
import history from '../../history';
import { useDispatch, useSelector } from 'react-redux';
import { loadCartItems } from '../../actions';
import './ShoppingBag.css';

const ShoppingBag = () => {
    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch();

    useEffect(() => {
        if (localStorage.length) {
            dispatch(loadCartItems(JSON.parse(localStorage.getItem('cart'))));
        }

        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        
        if (cart.length || localStorage.getItem('cart') === null) {
            localStorage.setItem('cart', JSON.stringify(cart));
        } else {
            localStorage.clear()
        }

    }, [cart])

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