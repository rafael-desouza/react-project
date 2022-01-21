import Container from './styles'
import React, { useContext } from 'react'
import CartContext from 'store/cart-context'
import CartHeader from './CartHeader'
import CartItem from './CartItem'

const CartList = () => {
  const cartContext = useContext(CartContext)
  const totalAmount = cartContext.totalAmount.toFixed(2)

  const cartItems = (
    <ul>
      {cartContext.items.map(item => (
        <CartItem
          key={item.id}
          item={item}
          onAdd={cartContext.addItem}
          onRemove={cartContext.removeItem}
        />
      ))}
    </ul>
  )

  const total = cartContext.items.reduce(
    (total, item) => total + item.amount,
    0
  )

  const emptyCart = () => {
    return (
      <div className="empty-cart" data-testid="empty-cart">
        <h1>Seu carrinho está vazio</h1>
        <p>
          Temos muitas ofertas te esperando!!! Volte a tela inicial e
          aproveite😜
        </p>
      </div>
    )
  }

  const totalInfo = () => {
    return (
      <div className="total" data-testid="total">
        <div className="order"> Resumo do Pedido </div>
        <div className="amount-info">
          <span className="products">{amountInfo}</span>
          <span className="amount">{`R$ ${totalAmount}`}</span>
        </div>
      </div>
    )
  }

  const amountInfo = total > 1 ? `${total} produtos` : `${total} produto`

  return (
    <Container>
      <CartHeader />
      <div className="content">
        <div className="my-cart">Meu carrinho</div>
        {total > 0 && cartItems}
        {total > 0 && totalInfo()}
        {total === 0 && emptyCart()}
      </div>
    </Container>
  )
}

export default CartList
