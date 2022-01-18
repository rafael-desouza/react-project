import React from 'react'

import Container from './styles'

type Props = {
  onClick: () => void
}

export const ModalBackdrop = ({ onClick }: Props) => {
  return <Container onClick={onClick} />
}
