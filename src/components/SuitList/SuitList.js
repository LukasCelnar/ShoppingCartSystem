import React from 'react';
import Suit from '../Suit/Suit';
import './SuitList.css';
import SuitListJson from './SuitList.json'

const SuitList = () => {

    const renderSuits = () => {
        return SuitListJson.map((suit, i) => {
            return <Suit 
                    key={i} 
                    name={suit.name}
                    price={suit.price}
                    id={suit.id}
                    />
        });
    }

    return (
        <div className="suit-list">
            {renderSuits()}
        </div>
    )
}

export default SuitList;