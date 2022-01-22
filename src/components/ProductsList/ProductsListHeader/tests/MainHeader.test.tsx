import { render, screen } from '@testing-library/react'
import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import ProductsListHeader from '..'

describe('Main Header', () => {
  test('deve renderizar um elemento header', () => {
    render(<ProductsListHeader onSearch={jest.fn} />, { wrapper: MemoryRouter })
    const title = screen.getByTestId('header')

    expect(title).toBeInTheDocument()
  })
})
