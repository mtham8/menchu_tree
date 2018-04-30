import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'

import { isAuthenticated } from './helpers'

export default class AuthenticatedRoute extends Component {
  render () {
    const { component: Component, cProps, ...rest } = this.props,
      { auth } = cProps

    return (
      <Route
        {...rest}
        render={props =>
          isAuthenticated(auth) ? (
            <Component {...props} />
          ) : (
            <Redirect to='/login' />
          )
        }
      />
    )
  }
}
