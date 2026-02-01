import React from "react";
import style from "./main.module.scss";
import MCalendar from "../MCalendar/MCalendar";
import { Route, Routes } from "react-router-dom";

export default function Main(){
    return (
        <main className={style.main}>
            <Routes>
                <Route path="/" element={<MCalendar/>}></Route>
                <Route path="/week" element={<hi>Week</hi>}></Route>
                <Route path="/day" element={<day>Day</day>}></Route>
            </Routes>
            
        </main>
    )
}