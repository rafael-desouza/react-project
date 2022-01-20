import { render, screen } from '@testing-library/react'
import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import CartHeader from '..'

describe('CartHeader', () => {
  test('deve renderizar o Cabeçalho do carrinho e verificar a renderização do logo', () => {
    render(<CartHeader />, { wrapper: MemoryRouter })

    const title = screen.getByText('Liven Shop')

    expect(title).toHaveClass('title')
  })
})
