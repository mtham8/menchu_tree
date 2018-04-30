import React, { Component } from 'react'
import PropTypes from 'prop-types'

const { string, bool, func } = PropTypes

export default class Switch extends Component {
  static propTypes = {
    id: string.isRequired,
    checked: bool.isRequired,
    onClick: func.isRequired,
    text: string,
    className: string
  }

  shouldComponentUpdate (nextProps, nextState) {
    if (nextProps.checked !== this.props.checked) {
      return true
    }
    return false
  }

  render () {
    const { id, checked, onClick, text, className } = this.props

    return (
      <div className='field'>
        <input
          id={id}
          className={`switch ${className}`}
          type='checkbox'
          checked={checked}
          readOnly
        />
        <label htmlFor={id} onClick={onClick}>
          {text}
        </label>
      </div>
    )
  }
}
