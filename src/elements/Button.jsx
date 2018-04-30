import React, { Component } from 'react'
import PropTypes from 'prop-types'

const { func, string, bool } = PropTypes

class Button extends Component {
  static propTypes = {
    onClick: func.isRequired,
    className: string,
    isLoading: bool,
    isDisabled: bool,
    dataTooltip: string
  }

  static defaultProps = {
    className: '',
    isDisabled: false,
    isLoading: false
  }

  render () {
    const {
      className,
      isLoading,
      isDisabled,
      children,
      onClick,
      dataTooltip
    } = this.props

    return (
      <button
        className={
          isLoading ? `button ${className} is-loading` : `button ${className}`
        }
        disabled={isDisabled}
        onClick={onClick}
        data-tooltip={dataTooltip}
      >
        {children}
      </button>
    )
  }
}

export default Button
