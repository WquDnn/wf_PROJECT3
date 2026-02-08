import {useContext, useEffect, useRef, useState} from 'react'
import style from "./Modal.module.scss"
import { RiCloseLargeLine } from "react-icons/ri";
import {ContextStore} from "../../store/ContextStore"


export default function Modal(props) {

    let { addEvent } = useContext(ContextStore)

    const handleSubmit = (e) => {
        if (!correct) return
        addEvent({title, date, time, color})
        props.open(false)

    }
   
  return (
    <div className={style.wrapper} 
    onClick={(e)=>{
        if(e.target == e.currentTarget) props.open(false)
    }}
    >
        <div className={style.inner}>
            <button className={style.closeButton} onClick={()=>props.open(false)}>
                
<RiCloseLargeLine />


            </button>
            <h1>Ljlfnb gjls.</h1>
            <section>
                <label htmlFor="title">Hapdf gjls</label>
                <input type="text" name='title' id='title'
               
                />
                
 
            </section>
            <section>
                <label htmlFor="date">Lfnf gjls</label>
                <input type="date" name='date' id='date'
               />
            
            </section>
            <section>
                <label htmlFor="time">Xfc gjls</label>
                <input type="time" name='time' id='time'
                />
                
            
            </section>
            <section>
                <label htmlFor="color">Rjksh gjls</label>
                <input type="color" name='color' id='color'
              />
            </section>
            <button>Ljlfnb gjls.s</button>

        </div>
      
    </div>
  )
}
