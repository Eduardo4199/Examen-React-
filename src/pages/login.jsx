import React, { Fragment, useContext, useState } from 'react';
import { userService } from '../services/user.service'
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import { UserContext } from '../context/user.context'
import '../assets/css/login.css'


export function Login(props) {
    const { register, errors, handleSubmit } = useForm();
    const history = useHistory()
    const { user, setUser } = useContext(UserContext)
    const [error, setError] = useState(false)

    const onSubmit = (data) => {
        let response = userService.login(data);
        if (response) {
            setUser(data.user);
            history.push("/Home")
            return true
        }
        else {
            setError(true);
            return false;
        }
    }

    return (
        <Fragment>
            <div class="container login_background">
                <div class="d-flex justify-content-center h-100">
                    <div class="card">
                        <div class="card-header">
                            <h3>Login</h3>
                        </div>
                        <div class="card-body">
                            <form onSubmit={handleSubmit(onSubmit)} name="login">
                                <div class="input-group form-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="fas fa-user"></i></span>
                                    </div>
                                    <input type="text" name="user" ref={register({ required: true })} className="form-control" ></input>

                                </div>
                                <div class="input-group form-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="fas fa-key"></i></span>
                                    </div>
                                    <input type="password" name="password" ref={register({ required: true })} className="form-control"></input>
                                </div>
                                {errors.user &&
                                    <div class="alert alert-danger" role="alert">
                                        Debes ingresar un nombre de usuario.
                                      </div>
                                }
                                {errors.password &&
                                    <div class="alert alert-danger" role="alert">
                                        Debes ingresar una contraseña.
                                    </div>
                                }
                                {error &&
                                    <div class="alert alert-danger" role="alert">
                                        Credenciales invalidas.
                                    </div>
                                }
                                <div class="form-group">
                                    <input type="submit" value="Login" class="btn float-right login_btn" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </Fragment>
    )
}