import React, { Fragment, useState, useEffect, useMemo } from 'react';
import { userService } from '../services/user.service'

const UserContext = React.createContext();

export function UserProvider(props) {
    const [user, setUser] = useState([]);

    const value = useMemo(() => {
        return ({
            user,
            login,
            logout
        })
    })

    const login = (data) => {
        let response = userService.login(data);
        if (response) {
            setUser(data)
        }
        else {
            return false;
        }
    }

    const logout = () =>{
        setUser([])
    }

    return <UserContext.Provider value={value} {...props} />
}

export function UseUser() {
    const context = React.useContext(UserContext)
    return context;
}