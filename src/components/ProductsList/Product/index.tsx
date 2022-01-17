import CartAddIcon from 'assets/images/CartAddIcon'
import React from 'react'
import Item from 'types/item'
import Container from './styles'

interface Props {
  item: Item
}

const Product: React.FC<Props> = ({ item }) => {
  return (
    <Container img_url={item.image}>
      <span className="top-wrapper"></span>
      <span className="bottom-wrapper">
        <span className="bottom-content">
          <span className="item-name">{item.name}</span>
          <span className="item-price">{`R$ ${item.price}`}</span>
        </span>
        <span className="bottom-ico">
          <span className="cart-add-icon" data-testid="cart-add-icon">
            <CartAddIcon />
          </span>
        </span>
      </span>
    </Container>
  )
}

export default Product
