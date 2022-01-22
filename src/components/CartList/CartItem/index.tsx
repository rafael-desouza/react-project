import React, { memo } from 'react'

import Item from 'types/item'
import Container from './styles'

type Props = {
  item: Item
  onAdd: (item: Item) => void
  onRemove: (item: Item) => void
}

const CartItem = ({ item, onAdd, onRemove }: Props) => {
  return (
    <Container>
      <img src={item.image} alt={item.name} />
      <div className="details">
        <div className="item-name" data-testid="item-name">
          {item.name}
        </div>
      </div>
      <div className="selectors">
        <div className="selectors-control">
          <button onClick={onRemove.bind(null, item)} data-testid="remove-btn">
            -
          </button>
          <span className="value"> {item.amount}</span>
          <button onClick={onAdd.bind(null, item)} data-testid="add-btn">
            +
          </button>
        </div>
      </div>
      <div className="amount-info">
        <span className="price">{`R$ `}</span>
        <span className="amount" data-testid="amount">
          {(item.amount * parseFloat(item.price)).toFixed(2)}
        </span>
      </div>
    </Container>
  )
}

export default memo(CartItem)
