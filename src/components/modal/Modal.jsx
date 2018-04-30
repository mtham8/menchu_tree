import CSSTransition from 'react-transition-group/CSSTransition'
import React from 'react'

export default function Modal ({
  header,
  modalOpen,
  closeModal,
  component,
  ...rest
}) {
  return (
    <CSSTransition classNames='fade' timeout={500} in={modalOpen}>
      <div className='modal is-active'>
        <div className='modal-background' />
        <div className='modal-card'>
          <header className='modal-card-head'>
            <p className='modal-card-title'>{header}</p>
            <button
              className='delete'
              aria-label='close'
              onClick={closeModal}
            />
          </header>
          {component}
        </div>
      </div>
    </CSSTransition>
  )
}
