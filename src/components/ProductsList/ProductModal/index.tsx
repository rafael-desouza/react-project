import React from 'react'

import Item from 'types/item'
import Container from './styles'

type Props = {
  onClose: () => void
  item: Item
}

/**
 *Display image of selected product
 * @param onClose action to be dispatched on close click
 * @returns JSX.element
 */
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
