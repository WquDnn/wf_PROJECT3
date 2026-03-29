import {useContext, useEffect, useRef, useState} from 'react'
import style from "./Modal.module.scss"
import { RiCloseLargeLine } from "react-icons/ri";
import {ContextStore} from "../../store/ContextStore"
import { useForm } from "react-hook-form"
import { useDispatch } from 'react-redux';
import{addNewEvent} from "../../store/EventsReducer"

export default function Modal(props) {
    
let dispatch = useDispatch()
    let {register, handleSubmit, formState: {errors}, reset} = useForm()

    
                const submit = (data) => {
                    console.log(data)
                    
                    dispatch(addNewEvent(data))
                    props.open(false)
                    reset()
                }

   
  return (
    <div className={style.wrapper} 
    onClick={(e)=>{
        if(e.target == e.currentTarget) props.open(false)
    }}
    >
        <form onSubmit={handleSubmit(submit)} className={style.inner}>
            <button className={style.closeButton} onClick={()=>props.open(false)}>
                
<RiCloseLargeLine />


            </button>
            <h1>Ljlfnb gjls.</h1>
            <section>
                <label htmlFor="title">Hapdf gjls</label>
                <input type="text" name='title' id='title'
                {...register("title", {
                    required: true,
                    minLenght: 3,
                    maxLength: 40,
                    pattern: {
                        value: /^[a-zA-Z0-9\s]*$/, 
                        message: "Only letters or numbers",
                    },
                    message: "WRONG TITLE"
                })}
               
                />
                
 
            </section>
            <section>
                <label htmlFor="date">Lfnf gjls</label>
                <input type="date" name='date' id='date'
                {...register("date", {
                    required: {
                        value: true,
                        message: "Date is empty"
                    }
                })}
               />
            
            </section>
            <section>
                <label htmlFor="time">Xfc gjls</label>
                <input type="time" name='time' id='time'
                {...register("time", {
                    required: {
                        value: true,
                        message: "TIME IS WRONG"
                    }
                })}
                />
                
            
            </section>
            <section>
                <label htmlFor="color">Rjksh gjls</label>
                <input type="color" name='color' id='color'
                {...register("color", {value: "#0000"})}

              />
            </section>
            {(errors.title || errors.date || errors.time) && (
                <span className={style.error}>
                    {errors.title?.message}
                    {errors.date?.message}
                    {errors.time?.message}
                </span>
            )}
            <button type="submit" disabled={errors.title || errors.date || errors.time}>Ljlfnb gjls.s</button>

        </form>
      
    </div>
  )
}
