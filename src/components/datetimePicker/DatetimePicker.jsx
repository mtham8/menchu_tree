import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Datetime from 'react-datetime'
import 'react-datetime/css/react-datetime.css'

const { string, func, number, bool } = PropTypes

export default class DatetimePicker extends Component {
  static propTypes = {
    id: string.isRequired,
    onChange: func.isRequired,
    value: number.isRequired,
    isValidDate: func
  }

  static defaultProps = {
    isValidDate: () => true
  }

  onChange = e => {
    const { onChange, id } = this.props

    onChange({
      id,
      value: +e / 1000
    })
  }

  render () {
    const { value, isValidDate } = this.props

    const inputProps = {
      className: 'input'
    }

    return (
      <div className='control has-icons-right'>
        <Datetime
          inputProps={inputProps}
          closeOnTab
          value={value}
          onChange={this.onChange}
          isValidDate={isValidDate}
        />
        <span className='icon is-small is-right' key='calendar'>
          <i className='fa fa-calendar' />
        </span>
      </div>
    )
  }
}
