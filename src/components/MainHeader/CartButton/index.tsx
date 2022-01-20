import CartIcon from 'assets/images/CartIcon'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import CartContext from 'store/cart-context'
import Container from './styles'

const CartButton = () => {
  const cartContext = useContext(CartContext)
  const { items } = cartContext

  const numberOfCartItems = items.reduce((previousNumber, item) => {
    return previousNumber + item.amount
  }, 0)

  return (
    <Container>
      <Link to={'/cart'} className="link">
        <div className="wrapper">
          <span className="cart-icon" data-testid="cart-icon">
            <CartIcon />
          </span>
          <span className="cart-content">Carrinho</span>
          <span className="cart-size" data-testid="cart-size">
            {numberOfCartItems}
          </span>
        </div>
      </Link>
    </Container>
  )
}

export default CartButton
