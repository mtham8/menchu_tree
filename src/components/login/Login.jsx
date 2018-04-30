import React, { Component } from 'react'
import PropTypes from 'prop-types'

import ModalHoc from '../modal/ModalHoc'
import Button from '../../elements/Button'
import Input from '../../elements/Input'
import Label from '../../elements/Label'

const { func, bool, string } = PropTypes

class Login extends Component {
  static propTypes = {
    openModal: func.isRequired,
    closeModal: func.isRequired,
    loginUser: func.isRequired,
    loginError: bool.isRequired,
    isAuthenticating: bool.isRequired,
    logo: string.isRequired
  }

  static defaultProps = {
    loginError: false,
    isAuthenticating: false
  }

  state = {
    username: '',
    password: ''
  }

  handleChange = ({ target }) => {
    const { id, value } = target
    this.setState({
      [id]: value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    const { username, password } = this.state
    const { loginUser } = this.props
    loginUser({ username, password })
  }

  handleKeyPress = e => {
    if (e.key === 'Enter') {
      this.handleSubmit(e)
    }
  }

  render () {
    const { isAuthenticating, loginError, logo } = this.props

    return (
      <div className='login-container columns'>
        <div className='column is-one-third' />
        <div className='login-content column is-one-third box'>
          <div className='login-icon'>
            <img src={logo} alt='Menchu Family Tree' />
            <div>
              <label className='login-title' htmlFor='username'>
                Sign in
              </label>
              <div>to continue to Menchu Family Tree</div>
            </div>
          </div>

          {loginError && (
            <span className='notification is-warning'>
              Invalid username/password combination. Please try again.
            </span>
          )}

          <div className='field'>
            <Label text='Username' htmlFor='username' />
            <div className='control has-icons-left'>
              <Input
                id='username'
                type='username'
                value={this.state.username}
                onChange={this.handleChange}
              />
              <span className='icon is-small is-left'>
                <i className='fa fa-user' />
              </span>
            </div>
          </div>

          <div className='field'>
            <Label text='Password' htmlFor='password' />
            <div className='control has-icons-left'>
              <Input
                id='password'
                type='password'
                value={this.state.password}
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress}
              />
              <span className='icon is-small is-left'>
                <i className='fa fa-lock' />
              </span>
            </div>
          </div>

          <div className='buttons is-centered'>
            <Button
              className='is-primary is-raised'
              onClick={this.handleSubmit}
              isLoading={isAuthenticating}
            >
              <span className='icon is-small'>
                <i className='fa fa-sign-in' />
              </span>
              <span>Sign in</span>
            </Button>
          </div>
        </div>
        <div className='column is-one-third' />
      </div>
    )
  }
}

export default ModalHoc(Login)
