import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

const { string } = PropTypes

export default class Label extends PureComponent {
  static propTypes = {
    text: string,
    htmlFor: string,
    className: string
  }

  static defaultProps = {
    text: '',
    htmlFor: '',
    className: ''
  }

  render () {
    const { text, htmlFor, className } = this.props

    return (
      <label className={`label ${className}`} htmlFor={htmlFor}>
        {text}
      </label>
    )
  }
}
