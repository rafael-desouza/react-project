import React from 'react'

import Container from './styles'

export const ModalOverlay: React.FC = props => {
  return (
    <Container>
      <div>{props.children}</div>
    </Container>
  )
}
