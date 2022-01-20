import { render, screen } from '@testing-library/react'
import React from 'react'
import { MemoryRouter } from 'react-router-dom'

import CartButton from '..'

describe('Cart button', () => {
  beforeEach(() => render(<CartButton />, { wrapper: MemoryRouter }))

  test('deve conter o ícone de carrinho com a classe cart-icon', () => {
    const cartIcon = screen.getByTestId('cart-icon')

    expect(cartIcon).toBeInTheDocument()
    expect(cartIcon).toHaveClass('cart-icon')
  })

  test('deve conter o texto carrinho com a classe cart-content', () => {
    const cartContent = screen.getByText('Carrinho')

    expect(cartContent).toBeInTheDocument()
    expect(cartContent).toHaveClass('cart-content')
  })

  test('deve conter o valor 0 com a classe cart-size', () => {
    const cartSize = screen.getByText('0')

    expect(cartSize).toBeInTheDocument()
    expect(cartSize).toHaveClass('cart-size')
  })
})
