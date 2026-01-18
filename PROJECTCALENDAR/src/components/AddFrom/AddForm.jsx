import {useEffect, useRef, useState} from 'react'
import style from "./addForm.module.scss"

export default function AddForm() {
    let [title, setTitle] = useState("")
    let [date, setDate] = useState("")
    let [time, setTime] = useState("")
    let [color, setColor] = useState("")
    let [correct, setCorrect] = useState(false)

     let titleRef= useRef(null)
    let dateRef = useRef(null)
    let timeRef = useRef(null)

    useEffect(()=>{
        titleRef.current.style.display = "none"
        dateRef.current.style.display = "none"
        timeRef.current.style.display = "none"
        if(title.length < 1){
             titleRef.current.style.display = "block"
        }else if (date.lenght < 1) {
            dateRef.current.style.display = "block"
        
        }else if (time.lenght < 1) {
            timeRef.current.style.display = "block"
        }else {
            setCorrect(true)
        }

    }, [title, date, time])

   
  return (
    <div className={style.wrapper}>
        <div className={style.inner}>
            <h1>Ljlfnb gjls.</h1>
            <section>
                <label htmlFor="title">Hapdf gjls</label>
                <input type="text" name='title' id='title'
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                />
                <div className={style.error} ref={titleRef}> Nazva zakorotka</div>
 
            </section>
            <section>
                <label htmlFor="date">Lfnf gjls</label>
                <input type="date" name='date' id='date'
                value={date}    
                onChange={(e)=>setDate(e.target.value)}/>
                <div className={style.error} ref={dateRef}> data nevstanovlena</div>
            </section>
            <section>
                <label htmlFor="time">Xfc gjls</label>
                <input type="time" name='time' id='time'
                value={time}
                onChange={(e)=>setTime(e.target.value)}/>
                <div className={style.error} ref={timeRef}> chas ne vstanovleniu</div>
            </section>
            <section>
                <label htmlFor="color">Rjksh gjls</label>
                <input type="color" name='color' id='color'
                value={color}
                onChange={(e)=>setColor(e.target.value)}/>
            </section>
            <button>Ljlfnb gjls.s</button>

        </div>
      
    </div>
  )
}
