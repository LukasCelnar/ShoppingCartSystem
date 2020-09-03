import React from 'react';
import './Suit.css'

const Suit = ({ name, price, id }) => {

    return (
        <div className="suit">
            <img className="suit__img" alt="suit" src={"/images/suits/" + id + '.jpg'} />
            <div className="suit__description">
                <div className="suit__name">{name}</div>
                <div className="suit__price">{`${price}0 €`}</div>
                <div className="suit__btn">ADD TO CART</div>
            </div>
        </div>
    )
}

export default Suit;
