import React from 'react'
import { Link } from 'react-router-dom'

import Logo from 'components/common/Logo'
import Container from './styles'

/**
 * Display a cart header
 * @returns JSX.element
 */
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
