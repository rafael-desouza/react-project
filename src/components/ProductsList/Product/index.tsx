import CartAddIcon from 'assets/images/CartAddIcon'
import Modal from 'components/UI/Modal'
import React, { useState } from 'react'
import Item from 'types/item'
import ProductModal from '../ProductModal'
import Container from './styles'

interface Props {
  item: Item
}

const Product: React.FC<Props> = ({ item }) => {
  const [productInfoIsShown, setProductInfoIsShown] = useState(false)

  const showProductInfo = () => {
    productInfoIsShown
      ? setProductInfoIsShown(false)
      : setProductInfoIsShown(true)
  }

  return (
    <Container img_url={item.image}>
      {productInfoIsShown && (
        <Modal onClick={showProductInfo}>
          <ProductModal onClose={showProductInfo} item={item} />
        </Modal>
      )}
      <span className="top-wrapper" onClick={showProductInfo}></span>
      <span className="bottom-wrapper">
        <span className="bottom-content">
          <span className="item-name">{item.name}</span>
          <span className="item-price">{`R$ ${item.price}`}</span>
        </span>
        <span className="bottom-ico">
          <span className="cart-add-icon" data-testid="cart-add-icon">
            <CartAddIcon />
          </span>
        </span>
      </span>
    </Container>
  )
}

export default Product