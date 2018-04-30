import React, { Component } from 'react'
import PropTypes from 'prop-types'

const { array, string } = PropTypes

export default class DropdownMenu extends Component {
  static propTypes = {
    dropdownList: array,
    dropdownFooter: array,
    buttonClassname: string,
    iconClassname: string,
    dataTooltip: string
  }

  static defaultProps = {
    dropdownList: [],
    dropdownFooter: []
  }

  mapDropdownList = dropdownList =>
    dropdownList.map((item, index) => {
      return (
        <div className='dropdown-item' key={index}>
          {item}
        </div>
      )
    })

  mapDropdownFooter = dropdownFooter =>
    dropdownFooter.map((item, index) => {
      return (
        <div className='dropdown-item' key={index}>
          {item}
        </div>
      )
    })

  render () {
    const {
      buttonName,
      buttonClassname,
      iconClassname,
      dropdownFooter,
      dropdownList,
      dataTooltip
    } = this.props

    return (
      <div className='dropdown'>
        <a
          className={`button ${buttonClassname} dropdown-trigger`}
          aria-haspopup='true'
          aria-controls='dropdown-menu'
          tabIndex='0'
          data-tooltip={dataTooltip}
        >
          {buttonName && <span>{buttonName}</span>}
          {iconClassname && (
            <span className='icon is-small'>
              <i className={iconClassname} aria-hidden='true' />
            </span>
          )}
          {!iconClassname && (
            <span className='icon is-small'>
              <i className='fa fa-angle-down' aria-hidden='true' />
            </span>
          )}
        </a>

        <div className='dropdown-menu' id='dropdown-menu' role='menu'>
          <div className='dropdown-content'>
            {this.mapDropdownList(dropdownList)}
            {dropdownFooter.length > 0 && <hr className='dropdown-divider' />}
            {dropdownFooter.length > 0 &&
              this.mapDropdownFooter(dropdownFooter)}
          </div>
        </div>
      </div>
    )
  }
}
