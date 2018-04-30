import React, { Component } from 'react'
import PropTypes from 'prop-types'

const { string, func, bool, array } = PropTypes

export default class Select extends Component {
  static propTypes = {
    isLoading: bool,
    className: string,
    id: string.isRequired,
    options: array.isRequired,
    onChange: func.isRequired
  }

  static defaultProps = {
    isLoading: false,
    className: '',
    options: [],
    value: ''
  }

  render () {
    const { isLoading, className, options, id, value, onChange } = this.props

    return (
      <div className='field'>
        <div className='control'>
          <div
            className={
              isLoading
                ? `select is-loading ${className}`
                : `select ${className}`
            }
          >
            <select id={id} value={value} onChange={onChange}>
              {options}
            </select>
          </div>
        </div>
      </div>
    )
  }
}
