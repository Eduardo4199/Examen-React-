import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as Pages from './pages';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router, Redirect, Switch } from 'react-router-dom';
import { UserContext } from './context/user.context'


const routing = (
  <Router>
    <App />
  </Router>
)

ReactDOM.render(routing,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
