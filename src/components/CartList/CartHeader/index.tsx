import Logo from 'components/common/Logo'
import React from 'react'
import { Link } from 'react-router-dom'
import Container from './styles'

const CartHeader = () => {
  return (
    <Container>
      <header className="header-content" data-testid="header">
        <Link to="/" className="title">
          <Logo />
        </Link>
      </header>
    </Container>
  )
}

export default CartHeader
