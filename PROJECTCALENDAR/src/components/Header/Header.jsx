import React from 'react'
// import PropTypes from 'prop-types'
import style from "./header.module.scss"
import { IoCalendar } from "react-icons/io5";
import { FaRegCalendar } from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6";
import { FaCalendarWeek } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { removeToken } from "../../store/AuthReducer"

function Header(props) {
  let isAuth = useSelector(state=>state.auth.token) != null;
  let dispatch = useDispatch()

let logout = () =>{
  dispatch(removeToken()) 

} 

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
      {
        !isAuth ? (
          <>
             <NavLink to="/login" className={({isActive})=> isActive ? style.active : style.link}>Login</NavLink>
              <NavLink to="/register" className={({isActive})=> isActive ? style.active : style.link}>Register</NavLink>
          </>
        ):(
         <NavLink onClick={logout}>Log Out</NavLink>
        )
      }
      </nav>
      </header>
    </div>
  )
}

// Header.propTypes = {

// }

export default Header

