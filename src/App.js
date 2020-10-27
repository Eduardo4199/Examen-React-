import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router, Redirect, Switch } from 'react-router-dom';
import { UserContext } from './context/user.context'
import { ThemeContext } from './context/theme.context'
import * as Pages from './pages';

export default function App() {

  const [user, setUser] = useState();
  const [theme, setTheme] = useState("lightTheme");
  console.log(user)
  return (
    <Router>
      <Switch>
        <UserContext.Provider value={{ user, setUser }}>
          <Route path="/Login" render={props => <Pages.Login setUser={() => setUser} />} />
          <ThemeContext.Provider value={{ theme, setTheme }}>
            <Route exact path="/Home" component={Pages.Home} />
            <Route exact path="/Image/:id" component={Pages.ImageDetail} />
          </ThemeContext.Provider>
        </UserContext.Provider>
        <div
      style={{
        backgroundColor: 'blue',
        width: '100px',
        height: '100px'
      }}
    />
      </Switch>
    </Router>

  );
}
