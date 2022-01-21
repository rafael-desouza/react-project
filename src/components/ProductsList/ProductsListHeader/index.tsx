import Logo from 'components/common/Logo'
import React from 'react'
import CartButton from './CartButton'
import Container from './styles'
import { FaUserCircle } from 'react-icons/fa'

const ProductsListHeader = () => {
  return (
    <Container>
      <header data-testid="header" className="header-content">
        <Logo />
        <span className="login">
          <FaUserCircle className="login-ico" />
          <span className="login-text">
            <span> Oi, Faça Login </span>
            <span> ou cadastra-se</span>
          </span>
        </span>
        <CartButton />
      </header>
    </Container>
  )
}

export default ProductsListHeader
