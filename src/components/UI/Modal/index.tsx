import React from 'react'
import ReactDOM from 'react-dom'

import { ModalBackdrop } from './ModalBackdrop'
import { ModalOverlay } from './ModalOverlay'

/**
 * Global modal for display info
 * @param props onClick function to be executed
 */
const Modal: React.FC<{ onClick: () => void }> = props => {
  const portalElement = document.getElementById('overlays') as HTMLElement

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <ModalBackdrop onClick={props.onClick} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </React.Fragment>
  )
}

export default Modal
