import React from 'react'
// import PropTypes from 'prop-types'
import style from "./header.module.scss"
import { IoCalendar } from "react-icons/io5";
import { FaRegCalendar } from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6";
import { FaCalendarWeek } from "react-icons/fa6";

function Header(props) {
  return (
    <div>
      <header className={style.wrapper}>
        <div className={style.iconBar}>
            <FaCalendarWeek />

            <h3>CALENAR</h3>
        </div>
      <nav>
      <a href="" className={style.link}>Main</a>
      <a href="" className={style.link}><IoCalendar />Month</a>
      <a href="" className={style.link}><FaCalendarDays />Week</a>
      <a href="" className={style.link}><FaRegCalendar />Day</a>
      </nav>
      </header>
    </div>
  )
}

// Header.propTypes = {

// }

export default Header

