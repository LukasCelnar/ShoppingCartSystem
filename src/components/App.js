import React from 'react';
import SuitList from './SuitList/SuitList';
import ShoppingBag from './ShoppingBag/ShoppingBag'
import './App.css';

const App = () => {
    return (
        <div>
            <ShoppingBag />
            <SuitList />
        </div>
    )
}

export default App;