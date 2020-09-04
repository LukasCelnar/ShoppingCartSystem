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
            console.log("loading")
        }

        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));

        // checks if [] in localStorage is empty
        if (localStorage.getItem('cart') === '[]') {
            localStorage.clear()
            console.log("clearing")
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