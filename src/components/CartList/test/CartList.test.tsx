import React from 'react'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import CartList from '..'

describe('CartList', () => {
  test('deve renderizar o carrinho vazio e exibir o component empty cart com a classe empty-cart', () => {
    render(<CartList />, { wrapper: MemoryRouter })
    const emptyCart = screen.getByTestId('empty-cart')

    expect(emptyCart).toHaveClass('empty-cart')
  })

  test('deve renderizar o carrinho vazio e não exibir o total dos itens', () => {
    render(<CartList />, { wrapper: MemoryRouter })

    const totalInfo = screen.queryByTestId('total')
    expect(totalInfo).toBeNull()
  })
})
