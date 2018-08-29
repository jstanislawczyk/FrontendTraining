import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route } from "react-router-dom";

import Layout from './js/Layout';
import First from './js/First';
import Second from './js/Second';
import Third from './js/Third';

ReactDOM.render((
    
    <BrowserRouter>
        <div>
            <Route path="/" component={Layout} />
            <Route path="/first" component={First} />
            <Route path="/second" component={Second} />
            <Route path="/third" component={Third} />
        </div>  
    </BrowserRouter>
    ), document.getElementById('root'));

registerServiceWorker();
