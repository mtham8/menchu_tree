import React, { Component } from 'react'
import PropTypes from 'prop-types'

import NavbarDropdown from './NavbarDropdown'

const { string, func, bool, array } = PropTypes

const SignoutLink = ({ username }) => (
  <span className='field is-grouped'>
    <span className='control'>
      <i className='fa fa-user-circle-o' />
    </span>
    <span className='control'>
      {username || (
        <div className='field'>
          <div className='heading'>Admin</div>
          <div className='heading'>Only</div>
        </div>
      )}
    </span>
  </span>
)

export default class Navbar extends Component {
  static propTypes = {
    username: string,
    navItems: array,
    navFooters: array,
    logo: string
  }

  render () {
    const { username, navItems, navFooters, logo } = this.props

    return (
      <nav className='navbar is-light' role='navigation'>
        <div className='navbar-brand'>
          <div className='navbar-item'>
            <div className='field'>
              <div className='heading'>Menchu</div>
              <div className='heading'>Family Tree</div>
            </div>
          </div>

          <button className='button navbar-burger' data-target='navMenu'>
            <span />
            <span />
            <span />
          </button>
        </div>

        <div className='navbar-menu is-active' id='navMenu'>
          <div className='navbar-start'>{navItems}</div>

          <div className='navbar-end'>
            <NavbarDropdown
              link={<SignoutLink username={username} />}
              alignment='is-right'
            >
              {navFooters}
            </NavbarDropdown>
          </div>
        </div>
      </nav>
    )
  }
}
