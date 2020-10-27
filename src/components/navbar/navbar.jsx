import React, { Fragment, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../context/user.context'
import { useHistory } from 'react-router-dom';
import '../../assets/css/navbar.css'

export function Navbar(props) {

    const { user, setUser } = useContext(UserContext);
    const history = useHistory()
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
        if (props.theme == "lightTheme") {
            props.setTheme("darkTheme")
        }
        else if (props.theme == "darkTheme") {
            props.setTheme("lightTheme")
        }
        else {
            props.setTheme("lightTheme")
        }
    }

    return (
        <Fragment>
            <div>
                <div>
                    <div>
                        <h4 ></h4>
                    </div>
                </div>
            </div>

            <div class="area"></div><nav class="main-menu">
                <ul>
                    <li>
                        <i class="fa fa-user fa-2x"></i>
                        <span class="nav-text" style={{color : 'white'}}>
                            {user}
                        </span>
                    </li>
                </ul>
                <li class="has-subnav">
                    <Link to="/Home">
                        <i class="fa fa-home fa-2x"></i>
                        <span class="nav-text">
                            Home
                            </span>
                    </Link>
                </li>
                <li class="has-subnav">
                    <a href="#" onClick={() => changeTheme()}>
                        <i class="fa fa-laptop fa-2x"></i>
                        <span class="nav-text">
                            Cambiar tema
                        </span>
                    </a>
                </li>
                <ul class="logout">
                    <li>
                        <a href="#" onClick={() => logout()}>
                            <i class="fa fa-power-off fa-2x"></i>
                            <span class="nav-text">
                                Logout
                        </span>
                        </a>
                    </li>
                </ul>
            </nav>

        </Fragment>
    )
}
