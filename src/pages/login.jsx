import React, { Fragment, useState } from 'react';
import { userService } from '../services/user.service'
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom'
import { UserProvider, UseUser } from '../context/user.context';


export function Login(props) {

    const { register, handleSubmit } = useForm();
    const {login} = UseUser();
    const history = useHistory()

    const onSubmit = (data) => {
        let response = userService.login(data);
        if(response){
            history.push("/Home")
        }
        else{
            console.log("a")
        }
    }

    return (
        <Fragment>
            <div>
                <form onSubmit={handleSubmit(login)} name="login">
                    <div>
                        <input type="text" name="user" ref={register({ required: true})}></input>
                        <input type="password" name="password" ref={register({ required: true})}></input>
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