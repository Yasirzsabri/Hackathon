import React from 'react'
import { NavLink } from 'react-router-dom'

const NavLinks = () => {
  return (
  <ul>
    nav links on navLinks page
    <li>
    <NavLink to ='/find_atm' exact >Find ATM</NavLink>
    </li>
  </ul>
  )
}

export default NavLinks
