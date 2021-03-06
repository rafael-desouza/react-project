import React, { memo, useContext, useState } from 'react'

import Modal from 'components/UI/Modal'
import CartContext from 'store/cart-context'
import Item from 'types/item'
import ProductModal from '../ProductModal'
import Container from './styles'

interface Props {
  item: Item
}

/**
 * Display a card with item infos
 * @param item Item to show infos on card
 * @returns JSX.element
 */
const Product = ({ item }: Props) => {
  const [productInfoIsShown, setProductInfoIsShown] = useState(false)

  const cartState = useContext(CartContext)

  const showProductInfo = () => {
    productInfoIsShown
      ? setProductInfoIsShown(false)
      : setProductInfoIsShown(true)
  }

  return (
    <Container>
      {productInfoIsShown && (
        <Modal onClick={showProductInfo}>
          <ProductModal onClose={showProductInfo} item={item} />
        </Modal>
      )}
      <img
        src={item.image}
        alt={`${item.image}-image`}
        onClick={showProductInfo}
      />
      <div className="content">
        <div className="item-name">{item.name}</div>
        <div className="item-price" data-testid="item-price">
          <span>R$</span>
          {item.price}
        </div>
      </div>
      <div
        className="cart-add-icon"
        data-testid="cart-add-icon"
        onClick={cartState.addItem.bind('null', item)}
      >
        <span>comprar</span>
      </div>
    </Container>
  )
}

export default memo(Product)
