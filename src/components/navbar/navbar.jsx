import React, { Fragment, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../context/user.context'
import { useHistory } from 'react-router-dom';
import '../../assets/css/navbar.css'
import { ThemeContext } from '../../context/theme.context';

export function Navbar(props) {

    const { user, setUser } = useContext(UserContext);
    const history = useHistory()
    const { theme, setTheme } = useContext(ThemeContext);
    const logout = () => {
        setUser(null);
        history.push("/Login")
    }
    /*     useEffect(() => {
            if (user == undefined) {
                history.push("/Login")
            }
        }, []) */

    const changeTheme = () => {
        if (theme == "lightTheme") {
            setTheme("darkTheme")
        }
        else if (theme == "darkTheme") {
            setTheme("lightTheme")
        }
        else {
            setTheme("lightTheme")
        }
        console.log(theme)
    }

    return (
        <Fragment>
            <div className="area"></div><nav className={`main-menu`}>
                <ul>
                    <li>
                        <i className="fa fa-user fa-2x"></i>
                        <span className="nav-text" style={{color : 'white'}}>
                            {user}
                        </span>
                    </li>
                </ul>
                <li className="has-subnav">
                    <Link to="/Home">
                        <i className="fa fa-home fa-2x"></i>
                        <span className="nav-text">
                            Home
                            </span>
                    </Link>
                </li>
                <li className="has-subnav">
                    <a href="#" onClick={() => changeTheme()}>
                        <i className="fa fa-laptop fa-2x"></i>
                        <span className="nav-text">
                            Cambiar tema
                        </span>
                    </a>
                </li>
                <ul className="logout">
                    <li>
                        <a href="#" onClick={() => logout()}>
                            <i className="fa fa-power-off fa-2x"></i>
                            <span className="nav-text">
                                Logout
                        </span>
                        </a>
                    </li>
                </ul>
            </nav>

        </Fragment>
    )
}
