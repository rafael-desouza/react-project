import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'

import SearchProduct from '..'

const mockedOnClick = jest.fn()

describe('Search-Product', () => {
  beforeEach(() => render(<SearchProduct onSearch={mockedOnClick} />))

  test('deve renderizar o componente de pesquisa', () => {
    const search = screen.getByTestId('input-search')

    expect(search).toBeTruthy()
  })

  test('deve invocar a função onClick quando o usuário clicar no ícone de pesquisa', () => {
    const search = screen.getByTestId('ico')

    fireEvent.click(search)

    expect(mockedOnClick).toBeCalledTimes(1)
  })
})
