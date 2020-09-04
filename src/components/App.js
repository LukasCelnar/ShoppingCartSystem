import React from 'react';
import SuitList from './SuitList/SuitList';
import ShoppingBag from './ShoppingBag/ShoppingBag';
import Cart from './Cart/Cart';
import { Router, Switch, Route } from 'react-router-dom';
import history from '../history';
import './App.css';

const App = () => {

    return (
        <Router history={history}>
            <div>
                <ShoppingBag />
                <SuitList />
                <Switch>
                    <Route exact path="/cart" component={Cart} />
                </Switch>
            </div>
        </Router>
    )
}

export default App;