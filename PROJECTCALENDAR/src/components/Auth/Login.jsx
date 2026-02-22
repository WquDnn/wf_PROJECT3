import React from 'react'
import style from "./Auth.module.scss"
import { useForm } from "react-hook-form"

export default function Login() {
    const { register, handleSubmit, formState: { errors }, watch } = useForm()
    return (
        <div className={style.wrapper}>
            <form onSubmit={handleSubmit((data)=>console.log(data))}>
                <h1>Login</h1>
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

                <button className={style.button}>Login</button>
            </form>

        </div>
    )
}
