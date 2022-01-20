import React from 'react'
import { Link } from 'react-router-dom'
import Container from './styles'

const CartHeader = () => {
  return (
    <Container>
      <header className="header-content">
        <Link to="/" className="title">
          Liven Shop
        </Link>
      </header>
    </Container>
  )
}

export default CartHeader
