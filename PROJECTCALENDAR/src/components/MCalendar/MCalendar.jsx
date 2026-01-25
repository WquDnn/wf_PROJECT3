import React, { useState } from 'react'
import style from "./MCalendar.module.scss"
import { getCalendarDates } from '../../utils/calendar'

export default function MCalendar(props) {
    const [currentDate, setCurrentDate] = useState(new Date())

    const year = currentDate.getFullYear()
    const month = currentDate.getMonth()
        const dates = getCalendarDates(year, month)
        console.log(dates)

  return (
    <div className={style.wrapper}>
        <div className={style.container}></div>
        <table>
            <thead>
                <tr>
                    <th>PN</th>
                    <th>VT</th>
                    <th>SR</th>
                    <th>CHT</th>
                    <th>PT</th>
                    <th>SB</th>
                    <th>ND</th>
                </tr>
                </thead>
                <tbody></tbody>
        </table>
      
    </div>
  )
}
