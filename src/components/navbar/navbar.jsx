import React, { Fragment, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../context/user.context'
import { useHistory } from 'react-router-dom';

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
        if(props.theme == "lightTheme"){
            props.setTheme("darkTheme")
        }
        else if(props.theme == "darkTheme"){
            props.setTheme("lightTheme")
        }
        else{
            props.setTheme("lightTheme")
        }
    }

    return (
        <Fragment>
            <div class="pos-f-t">
                <div class="collapse" id="navbarToggleExternalContent">
                    <div class="bg-dark p-4">
                        <h4 class="text-white">Bienvenido {user}</h4>
                        <Link to="/Home">
                            Home
                        </Link>
                        <button onClick={() => logout()}>Logout</button>
                        <button onClick={() => changeTheme()}> Cambiar tema </button>
                    </div>
                </div>
                <nav class="navbar navbar-dark bg-dark">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </nav>
            </div>
        </Fragment>
    )
}
