import React from 'react';
import './Suit.css';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../actions';

const Suit = (props) => {
    const dispatch = useDispatch()

    const { name, price, id } = props

    const onAddToCartClick = (props) => {
        dispatch(addToCart(props))
    }

    return (
        <div className="suit">
            <img className="suit__img" alt="suit" src={"/images/suits/" + id + '.jpg'} />
            <div className="suit__description">
                <div className="suit__name">{name}</div>
                <div className="suit__price">{`${price}0 €`}</div>
                <div className="suit__btn" onClick={() => onAddToCartClick(props)}>ADD TO CART</div>
            </div>
        </div>
    )
}

export default Suit;
