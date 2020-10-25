import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router, Redirect, Switch } from 'react-router-dom';
import { UserContext } from './context/user.context'
import * as Pages from './pages';

export default function App() {

  const [user, setUser] = useState();
  return (
    <Router>
      <Switch>
        {/* <Route exact path="/Login" component={Pages.Login} setUser={() => setUser}/> */}
        <Route path="/Login" render={props => <Pages.Login setUser={() => setUser} />} />
        <UserContext.Provider value={user}>
          <Route exact path="/Home" component={Pages.Home} />
          <Route exact path="/Image/:id" component={Pages.ImageDetail} />
        </UserContext.Provider>
      </Switch>
    </Router>

  );
}
