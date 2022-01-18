import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'

import Item from 'types/item'
import ProductModal from '..'

const mockedItem: Item = {
  id: '1',
  createdAt: new Date(),
  name: 'Test Product',
  price: '99.99',
  stock: 5,
  image: 'http://lorempixel.com.br/640/480/food',
}

const handleClose = jest.fn()

describe('Product', () => {
  beforeEach(() => {
    render(<ProductModal onClose={handleClose} item={mockedItem} />)
  })

  test('deve conter uma imagem com a classe img', () => {
    const img = screen.getByTestId('img-modal')

    expect(img).toHaveClass('img')
  })

  test('deve conter um botão com a classe close', () => {
    const closeBtn = screen.getByTestId('close-modal')

    expect(closeBtn).toHaveClass('close-modal')
  })

  test('deve fechar o modal ao clicar no botão close', () => {
    const closeBtn = screen.getByTestId('close-modal')

    fireEvent.click(closeBtn)

    expect(handleClose).toBeCalledTimes(1)
  })
})
