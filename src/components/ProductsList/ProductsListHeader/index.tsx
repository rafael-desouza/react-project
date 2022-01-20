import Logo from 'components/common'
import React from 'react'
import CartButton from './CartButton'
import Container from './styles'

const ProductsListHeader = () => {
  return (
    <Container>
      <header data-testid="header" className="header-content">
        <Logo />
        <CartButton />
      </header>
    </Container>
  )
}

export default ProductsListHeader
