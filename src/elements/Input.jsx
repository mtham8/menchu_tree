import React, { Component } from 'react'
import PropTypes from 'prop-types'

const { string, func } = PropTypes

class Input extends Component {
  static propTypes = {
    id: string.isRequired,
    onChange: func.isRequired,
    value: string.isRequired,
    className: string,
    type: string,
    placeholder: string,
    onBlur: func,
    onKeyPress: func
  }

  static defaultProps = {
    value: '',
    type: 'text',
    placeholder: ''
  }

  shouldComponentUpdate (nextProps, nextState) {
    if (nextProps.value !== this.props.value) {
      return true
    }
    return false
  }

  render () {
    const {
      className,
      type,
      id,
      value,
      placeholder,
      onBlur,
      onKeyPress,
      onChange
    } = this.props

    return (
      <input
        className={`input ${className}`}
        type={type}
        id={id}
        value={value}
        placeholder={placeholder}
        onBlur={onBlur}
        onKeyPress={onKeyPress}
        onChange={onChange}
      />
    )
  }
}

export default Input
