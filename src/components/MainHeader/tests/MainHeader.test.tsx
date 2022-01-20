import { render, screen } from '@testing-library/react'
import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import MainHeader from '..'

describe('Main Header', () => {
  test('deve ter um element de classe titulo com o nome Liven shop', () => {
    render(<MainHeader />, { wrapper: MemoryRouter })
    const title = screen.getByText('Liven Shop')

    expect(title).toHaveClass('title')
  })
})
