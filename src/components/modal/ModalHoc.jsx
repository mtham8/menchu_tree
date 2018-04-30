import React, { Component } from 'react'

import Modal from './Modal'

export default function ModalHoc (ComposedComponent) {
  class _ModalHoc extends Component {
    state = {
      component: null,
      header: null,
      modalOpen: false
    }

    openModal = ({ header, component }) => {
      this.setState({
        component,
        header,
        modalOpen: true
      })
    }

    closeModal = () => {
      this.setState({
        component: null,
        header: null,
        modalOpen: false
      })
    }

    render () {
      const { modalOpen, component, header } = this.state

      return (
        <div>
          <ComposedComponent
            openModal={this.openModal}
            closeModal={this.closeModal}
            {...this.props}
          />
          {component && (
            <Modal
              closeModal={this.closeModal}
              modalOpen={modalOpen}
              header={header}
              component={component}
              {...this.props}
            />
          )}
        </div>
      )
    }
  }

  return _ModalHoc
}
