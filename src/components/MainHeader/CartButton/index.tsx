import CartIcon from 'assets/images/CartIcon'
import React from 'react'
import Container from './styles'

const CartButton = () => {
  return (
    <Container>
      <span className="cart-icon" data-testid="cart-icon">
        <CartIcon />
      </span>
      <span className="cart-content">Carrinho</span>
      <span className="cart-size" data-testid="cart-size">
        0
      </span>
    </Container>
  )
}

export default CartButton
