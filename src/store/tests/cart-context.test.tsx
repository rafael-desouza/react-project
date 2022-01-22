import React from 'react'

import { fireEvent, render, screen } from '@testing-library/react'
import CartContext, { CartContextProvider } from 'store/cart-context'
import mockedItem from 'tests/mockedItemBuilder'

describe('cart-context', () => {
  beforeEach(() => {
    render(
      <CartContextProvider>
        <CartContext.Consumer>
          {value => (
            <>
              <span>Amount: {value.totalAmount}</span>
              <span>Items: {value.items.length}</span>
              <button onClick={value.addItem.bind(null, mockedItem)}>
                addItem
              </button>
              <button onClick={value.removeItem.bind(null, mockedItem)}>
                removeItem
              </button>
            </>
          )}
        </CartContext.Consumer>
      </CartContextProvider>
    )
  })

  test('should render on initial state', () => {
    const amount = screen.getByText('Amount: 0')
    const items = screen.getByText('Items: 0')

    expect(amount).toBeTruthy()
    expect(items).toBeTruthy()
  })

  test('should add an item in items and the value in amount', () => {
    const addBtn = screen.getByText('addItem')

    fireEvent.click(addBtn)

    const amount = screen.getByText('Amount: 99.99')
    const items = screen.getByText('Items: 1')

    expect(amount).toBeTruthy()
    expect(items).toBeTruthy()
  })

  test('should remove an item in items and the value in amount', () => {
    const addBtn = screen.getByText('addItem')
    fireEvent.click(addBtn)

    const beforeRemoveAmount = screen.getByText('Amount: 99.99')
    const beforeRemoveItems = screen.getByText('Items: 1')

    expect(beforeRemoveAmount).toBeTruthy()
    expect(beforeRemoveItems).toBeTruthy()

    const removeBtn = screen.getByText('removeItem')
    fireEvent.click(removeBtn)

    const afterRemoveAmount = screen.getByText('Amount: 0')
    const afterRemoveItems = screen.getByText('Items: 0')

    expect(afterRemoveAmount).toBeTruthy()
    expect(afterRemoveItems).toBeTruthy()
  })
})
