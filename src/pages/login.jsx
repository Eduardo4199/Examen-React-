import React, { Fragment , useContext, useState} from 'react';
import { userService } from '../services/user.service'
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import { UserContext } from '../context/user.context'
import '../assets/css/themes.css'


export function Login(props) {
    const { register, handleSubmit } = useForm();
    const history = useHistory()
    const {user, setUser} = useContext(UserContext)

    const onSubmit = (data) => {
        let response = userService.login(data);
        if (response) {
            setUser(data.user);
            history.push("/Home")
            return true
        }
        else {
            return false;
        }
    }

    return (
        <Fragment>
            <div>
                
                <form onSubmit={handleSubmit(onSubmit)} name="login">
                    <div>
                        <input type="text" name="user" ref={register({ required: true })}></input>
                        <input type="password" name="password" ref={register({ required: true })}></input>
                    </div>
                    <div>
                        <button type="submit">
                            Iniciar sesion
                        </button>
                    </div>
                </form>
            </div>
        </Fragment>
    )
}