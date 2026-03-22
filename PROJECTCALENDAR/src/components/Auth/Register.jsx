import React, { useEffect } from 'react'
import style from "./Auth.module.scss"
import { useForm } from "react-hook-form"
import { useDispatch, useSelector  } from 'react-redux'
import { registerUser } from '../../store/AuthReducer'
import { useNavigate } from 'react-router-dom'

export default function Register() {
    const { register, handleSubmit, formState: { errors }, watch } = useForm()
    const { loading, error, token } = useSelector((state) => state.auth)
    let dispatch = useDispatch()
    let navigate = useNavigate()

    useEffect(()=>{
        if(error){
            alert(error)
        }
        if(token){
            navigate("/")
        }
    }, [token, error])
    return (
        <div className={style.wrapper}>
            <form onSubmit={handleSubmit((data)=>dispatch(registerUser(data)))}>
                <h1>Register</h1><label htmlFor="login">Login</label>
                <input type="text" id="login" {
                    ...register(
                        "login",
                        {
                            required: {
                                value: true,
                                message: "Login is required!"
                            },
                            minLength: {
                                vlaue: 3,
                                message: "Min length 3 characters"
                            },
                            maxLength: {
                                value: 20,
                                messgae: "Max length 20 characters"
                            },
                            pattern: {
                                value: /^[a-zA-Z0-9]+$/,
                                message: "Only characters and numbers are available"
                            }
                        }
                    )
                } />
                <span>{errors.login?.message}</span>
                <br />

                <label htmlFor="email">Email</label>
                <input type="text" id="email" {
                    ...register("email", {
                        required: true,
                        pattern: {
                            value: /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim,
                            message: "Invalid emaill format"
                        }
                    })
                }/>
                <span>{errors.email?.message}</span>
                <br />


                <label htmlFor="password">password</label>
                <input type="text" id="password" {...register(
                    "password",
                    {
                         required: {
                                value: true,
                                message: "Password is required!"
                            },
                            minLength: {
                                vlaue: 3,
                                message: "Min length 6 characters"
                            },
                            maxLength: {
                                value: 20,
                                messgae: "Max length 20 characters"
                            },
                            pattern: {
                                value: /^[a-zA-Z0-9]+$/,
                                message: "Only characters and numbers are available"
                            }
                    }
                )}/>
                <span>{errors.password?.message}</span>
                <br />


                <label htmlFor="confirmPassword">confirmPassword</label>
                <input type="etxt" id="confirmPassword" 
                {...register("confirmPassword", {
                    required: true,
                    validate: (value)=>{
                        if( value !== watch("password")){
                            return "Passwords do not match"
                        }

                    }
                })}/>
                <span>{errors.ConfirmPassword?.message}</span>
                <br />

                <button className={style.button}>Register</button>
            </form>

        </div>
    )
}
