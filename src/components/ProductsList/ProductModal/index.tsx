import React from 'react'

import Item from 'types/item'
import Container from './styles'

type Props = {
  onClose: () => void
  item: Item
}

const ProductModal = ({ onClose, item }: Props) => {
  return (
    <Container className="img" img_url={item.image} data-testid="img-modal">
      <div
        className="close-modal"
        onClick={onClose}
        data-testid="close-modal"
      ></div>
    </Container>
  )
}

export default ProductModal
