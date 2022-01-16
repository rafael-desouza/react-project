import React from 'react'
import CartButton from './CartButton'
import Container from './styles'

const MainHeader = () => {
  return (
    <Container>
      <header className="header-content">
        <span className="title">Liven Shop</span>
        <CartButton />
      </header>
    </Container>
  )
}

export default MainHeader
