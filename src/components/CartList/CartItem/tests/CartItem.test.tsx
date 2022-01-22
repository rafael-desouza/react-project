import React from 'react'

import { fireEvent, render, screen } from '@testing-library/react'
import mockedItem from 'tests/mockedItemBuilder'
import CartItem from '..'

const onAdd = jest.fn()
const onRemove = jest.fn()

describe('first', () => {
  beforeEach(() =>
    render(<CartItem item={mockedItem} onAdd={onAdd} onRemove={onRemove} />)
  )

  test('deve renderizar o nome do item com a classe item name', () => {
    const itemName = screen.getByTestId('item-name')

    expect(itemName).toHaveClass('item-name')
  })

  test('deve renderizar o total do item com a classe amount', () => {
    const itemAmount = screen.getByTestId('amount')

    expect(itemAmount).toHaveClass('amount')
  })

  test('deve renderizar o botão adicionar e verificar se a função onAdd foi invocada', () => {
    const addBtn = screen.getByTestId('add-btn')

    fireEvent.click(addBtn)
    fireEvent.click(addBtn)

    expect(onAdd).toBeCalledTimes(2)
  })

  test('deve renderizar o botão remover e verificar se a função onRemove foi invocada', () => {
    const removeBtn = screen.getByTestId('remove-btn')

    fireEvent.click(removeBtn)

    expect(onRemove).toBeCalledTimes(1)
  })
})
