import React, { Component } from 'react'
import PropTypes from 'prop-types'

const { string, array } = PropTypes

export default class AccordionCard extends Component {
  static propTypes = {
    id: string.isRequired,
    title: string.isRequired,
    footerList: array
  }

  static defaultProps = {
    footerList: []
  }

  mapFooterList = footerList =>
    footerList.map((footer, index) => (
      <a className='card-footer-item' key={index}>
        {footer}
      </a>
    ))

  render () {
    const { id, title, children, footerList } = this.props

    return (
      <div className='card'>
        <input type='checkbox' id={id} hidden />
        <label className='card-header' htmlFor={id}>
          <span className='card-header-title'>{title}</span>
          <span className='card-header-icon'>
            <span className='icon'>
              <i className='fa fa-angle-right' />
            </span>
          </span>
        </label>
        <div className='card-content'>
          <div className='content'>{children}</div>
        </div>
        {footerList.length > 0 && (
          <footer className='card-footer'>
            {this.mapFooterList(footerList)}
          </footer>
        )}
      </div>
    )
  }
}
