import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavbarLink ({ path, name }) {
  return (
    <NavLink to={path} activeClassName='is-active' className='navbar-item'>
      {name}
    </NavLink>
  )
}
