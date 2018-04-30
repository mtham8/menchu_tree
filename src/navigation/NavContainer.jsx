import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'

import Navbar from '../components/navbar/Navbar'
import NavbarDropdown from '../components/navbar/NavbarDropdown'
import NavbarLink from '../components/navbar/NavbarLink'

import * as actionCreators from '../authentication/actions/auth'
import App from '../routes/App'

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  username: state.auth.username
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actionCreators, dispatch)
})

const { bool, string, func } = PropTypes

class NavContainer extends Component {
  static propTypes = {
    username: string,
    isAuthenticated: bool,
    logout: func
  }

  static defaultProps = {
    username: ''
  }

  generateNavItems = () => {
    const navItems = [
      // <NavbarLink
      //   key='login'
      //   path='/login'
      //   name='Login'
      // />,
      <NavbarLink
        key='family_tree_info'
        path='/family_tree_info'
        name='Family Tree Information'
      />
    ]

    // if (this.props.isAuthenticated) {
    //   navItems.push(
    //     <NavbarLink
    //       key='manage_post'
    //       path='/manage_posts'
    //       name='Manage Posts'
    //     />
    //   )
    // }
    return navItems
  }

  render () {
    const { username } = this.props

    const { logout } = this.props.actions

    return (
      <div>
        <Navbar
          username={username}
          logout={logout}
          navItems={this.generateNavItems()}
          navFooters={[
            <a key='signout' className='navbar-item' onClick={() => logout()}>
              Sign out
            </a>,
            <NavbarLink key='login' path='/login' name='Sign in' />
          ]}
        />
        <div>
          <App />
        </div>
      </div>
    )
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(NavContainer)
)
