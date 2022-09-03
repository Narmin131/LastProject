import React from 'react'
import { NavLink } from 'react-router-dom'
const Banner = (props) => {
  return (
    <div className="banner">
        <h1>{props.title}</h1>
        <p><NavLink to='/'><i class="fa-solid fa-house"></i>Home</NavLink> <i class='fa-solid fa-angle-right'></i> {props.title}</p>
    </div>
  )
}

export default Banner