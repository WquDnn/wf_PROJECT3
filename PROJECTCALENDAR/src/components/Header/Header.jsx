import React from 'react'
// import PropTypes from 'prop-types'
import style from "./header.module.scss"
import { IoCalendar } from "react-icons/io5";
import { FaRegCalendar } from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6";
import { FaCalendarWeek } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';

function Header(props) {
  return (
    <div>
      <header className={style.wrapper}>
        <div className={style.iconBar}>
            <FaCalendarWeek />

            <h3>CALENAR</h3>
        </div>
      <nav>
      <NavLink to="/" className={({isActive})=> isActive ? style.active : style.link}>Main</NavLink>
      <NavLink to="/" className={({isActive})=> isActive ? style.active : style.link}><IoCalendar />Month</NavLink>
      <NavLink to="/week" className={({isActive})=> isActive ? style.active : style.link}><FaCalendarDays />Week</NavLink>
      <NavLink to="/day" className={({isActive})=> isActive ? style.active : style.link}><FaRegCalendar />Day</NavLink>
      </nav>
      </header>
    </div>
  )
}

// Header.propTypes = {

// }

export default Header

