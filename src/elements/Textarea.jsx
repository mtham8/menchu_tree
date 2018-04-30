import React, { Component } from 'react'
import PropTypes from 'prop-types'

const { string, func } = PropTypes

export default class Textarea extends Component {
  static propTypes = {
    className: string,
    id: string.isRequired,
    rows: string,
    value: string.isRequired,
    onChange: func.isRequired,
    placeholder: string
  }

  static defaultProps = {
    rows: '2',
    className: ''
  }

  render () {
    const { className, id, rows, value, onChange, placeholder } = this.props

    return (
      <div className='field'>
        <div className='control'>
          <textarea
            type='text'
            className={`textarea ${className}`}
            id={id}
            value={value}
            onChange={onChange}
            rows={rows}
            placeholder={placeholder}
          />
        </div>
      </div>
    )
  }
}
