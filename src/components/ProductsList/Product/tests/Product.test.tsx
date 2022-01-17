import { render, screen } from '@testing-library/react'
import React from 'react'
import Item from 'types/item'
import Product from '..'

describe('Product', () => {
  beforeEach(() => render(<Product item={mockedItem} />))

  const mockedItem: Item = {
    id: '1',
    createdAt: new Date(),
    name: 'Test Product',
    price: '99.99',
    stock: 5,
    image: 'http://lorempixel.com.br/640/480/food',
  }

  test('deve verificar o elemento com o valor Test Product e verificar se ele contem a classe item-name', () => {
    const itemName = screen.getByText('Test Product')

    expect(itemName).toHaveClass('item-name')
  })

  test('deve verificar o elemento com o valor R$ 99.99 e verificar se ele contem a classe item-price', () => {
    const itemPrice = screen.getByText('R$ 99.99')

    expect(itemPrice).toHaveClass('item-price')
  })

  test('deve verificar o elemento com o valor R$ 99.99 e verificar se ele contem a classe item-price', () => {
    const itemName = screen.getByText('R$ 99.99')

    expect(itemName).toHaveClass('item-price')
  })

  test('deve conter o ícone de carrinho com a classe cart-add-icon', () => {
    const cartAddIcon = screen.getByTestId('cart-add-icon')

    expect(cartAddIcon).toBeInTheDocument()
  })
})
