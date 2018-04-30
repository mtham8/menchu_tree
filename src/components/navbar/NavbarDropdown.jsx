import React, { Component } from 'react'

export default function NavbarDropdown ({ link, children, alignment }) {
  return (
    <div className='navbar-item has-dropdown is-hoverable'>
      <a className='navbar-link'>{link}</a>

      <div
        className={
          alignment ? `navbar-dropdown ${alignment}` : 'navbar-dropdown'
        }
      >
        {children}
      </div>
    </div>
  )
}
