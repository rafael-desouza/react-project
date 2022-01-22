import React, { useReducer } from 'react'

import Item from 'types/item'

type CartContextObject = {
  items: Item[]
  totalAmount: number
  addItem: (item: Item) => void
  removeItem: (item: Item) => void
}

export const CartContext = React.createContext<CartContextObject>({
  items: [],
  totalAmount: 0,
  addItem: () => {},
  removeItem: () => {},
})

enum ActionKind {
  Add = 'ADD',
  Remove = 'Remove',
}

type State = {
  items: Item[]
  totalAmount: number
}

type Action = {
  type: ActionKind
  item?: Item
  id?: number
}

const defaultState: State = {
  items: [],
  totalAmount: 0,
}

/**
 * Contains the logic to handle cartState
 */
const cartReducer = (state: State = defaultState, action: Action) => {
  const { type, item: requestItem } = action

  if (!requestItem) return state

  if (type === ActionKind.Add && requestItem) {
    const updatedTotalAmount = state.totalAmount + parseFloat(requestItem.price)

    const existingCartItemIndex = state.items.findIndex(
      item => item.id === requestItem.id
    )

    const existingCartItem = state.items[existingCartItemIndex]
    let updatedItem: Item
    let updatedItems: Item[]

    if (existingCartItem) {
      updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + 1,
      }
      updatedItems = [...state.items]
      updatedItems[existingCartItemIndex] = updatedItem
    } else {
      updatedItem = { ...requestItem }
      updatedItems = state.items.concat(updatedItem)
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    } as State
  }

  if (type === ActionKind.Remove) {
    const existingCardIndex = state.items.findIndex(
      item => item.id === requestItem.id
    )
    const existingItem = state.items[existingCardIndex]
    const updatedTotalAmount =
      state.totalAmount - parseFloat(existingItem.price)

    let updatedItems: Item[]

    if (existingItem.amount === 1) {
      updatedItems = state.items.filter(item => item.id !== requestItem.id)
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 }
      updatedItems = [...state.items]
      updatedItems[existingCardIndex] = updatedItem
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    } as State
  }

  return defaultState
}

/**
 * Return a cart state and functions to handle the state
 * @param props children
 * @returns React.FC
 */
export const CartContextProvider: React.FC = props => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultState)

  const addItemToCartHandler = (item: Item) => {
    dispatchCartAction({ type: ActionKind.Add, item: item })
  }

  const removeItemFromCartHandler = (item: Item) => {
    dispatchCartAction({ type: ActionKind.Remove, item: item })
  }

  const contextValue: CartContextObject = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  }

  return (
    <CartContext.Provider value={contextValue}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartContext
