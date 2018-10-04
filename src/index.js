import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom'
import './Cocktails/globalStyles'
import registerServiceWorker from './registerServiceWorker';
import Drinks from './Cocktails/Drinks';
import Ingredients from './Cocktails/Ingredients'
import Cocktailsapp from './Cocktails/Cocktailsapp';
import Dodrinks from './Cocktails/Dodrinks';
import Foodapp from './Food/Foodapp';
import Category from './Food/Category'
import Mealitself from './Food/Mealitself'

ReactDOM.render(<Router>
        <Fragment>
            <Route path="/drinks" component={Drinks} />
            <Route path="/ingredients" component={Ingredients} />
            <Route path="/cocktailsapp" component={Cocktailsapp} />
            <Route path="/dodrinks/:id" component={Dodrinks} />
            <Route path="/foodapp" component={Foodapp} />
            <Route path="/category/:category" component={Category} />
            <Route path="/mealitself/:mealnumber" component={Mealitself} />
            {/* <Route path="/" */}
        </Fragment>  
    </Router>, document.getElementById('root'));
//registerServiceWorker();
