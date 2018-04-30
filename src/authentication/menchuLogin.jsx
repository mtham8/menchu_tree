import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actionCreators from './actions/auth'
import Login from '../components/login/Login'

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actionCreators, dispatch)
})

const mapStateToProps = state => ({
  auth: state.auth
})

function MenchuLogin (props) {
  const { loginError, isAuthenticating } = props.auth

  const { loginUser } = props.actions

  return (
    <Login
      logo='https://png.icons8.com/?id=5731&size=280'
      loginError={loginError}
      isAuthenticating={isAuthenticating}
      loginUser={loginUser}
    />
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(MenchuLogin)
