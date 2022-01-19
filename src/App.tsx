import React from 'react'

import GlobalStyle from './styles/global'
import MainHeader from 'components/MainHeader/index'
import ProductsList from 'components/ProductsList'
import { CartContextProvider } from 'store/cart-context'

const App = () => {
  return (
    <>
      <GlobalStyle />
      <CartContextProvider>
        <MainHeader />
        <ProductsList />
      </CartContextProvider>
    </>
  )
}

export default App
