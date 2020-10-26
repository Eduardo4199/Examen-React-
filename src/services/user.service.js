import useContext from 'react'

export const userService = {
    login,

};

function login(params) {
    if (params.password == "123456") {
        return true;
    }
    else {
        return false;
    }
}
