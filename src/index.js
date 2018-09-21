import React from 'react';
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

ReactDOM.render(<Router>
        <div>

            <Route path="/drinks" component={Drinks} />
            <Route path="/ingredients" component={Ingredients} />
            <Route path="/cocktailsapp" component={Cocktailsapp} />
            <Route path="/dodrinks/:id" component={Dodrinks} />
        </div>  
    </Router>, document.getElementById('root'));
registerServiceWorker();
