import { render, screen } from '@testing-library/react'
import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import CartHeader from '..'

describe('CartHeader', () => {
  test('deve renderizar o cabeçalho do carrinho', () => {
    render(<CartHeader />, { wrapper: MemoryRouter })

    const title = screen.getByTestId('header')

    expect(title).toBeInTheDocument()
  })
})
