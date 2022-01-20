import React from 'react'

import GlobalStyle from './styles/global'
import { CartContextProvider } from 'store/cart-context'
import MainRoutes from 'routes'

const App = () => {
  return (
    <>
      <GlobalStyle />
      <CartContextProvider>
        <MainRoutes />
      </CartContextProvider>
    </>
  )
}

export default App
