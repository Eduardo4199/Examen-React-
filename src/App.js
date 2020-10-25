import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router, Redirect, Switch } from 'react-router-dom';
import { UserContext } from './context/user.context'
import { ThemeContext } from './context/theme.context'
import * as Pages from './pages';
import ThemeSwitcher from './components/theme/themeSwitch'

export default function App() {

  const [user, setUser] = useState();

  useEffect(() => {
    console.log(user)
  },[user])

  return (
    <Router>
      <Switch>
        {/* <Route exact path="/Login" component={Pages.Login} setUser={() => setUser}/> */}
        <Route path="/Login" render={props => <Pages.Login setUser={() => setUser} />} />
        <UserContext.Provider value={user}>
          <ThemeContext.Provider value={"lightTheme"}>
            <ThemeSwitcher />
            <Route exact path="/Home" component={Pages.Home} />
            <Route exact path="/Image/:id" component={Pages.ImageDetail} />
          </ThemeContext.Provider>
        </UserContext.Provider>
      </Switch>
    </Router>

  );
}
