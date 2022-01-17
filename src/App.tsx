import React from 'react'

import GlobalStyle from './styles/global'
import MainHeader from 'components/MainHeader/index'
import ProductsList from 'components/ProductsList'

const App = () => {
  return (
    <>
      <GlobalStyle />
      <MainHeader />
      <ProductsList />
    </>
  )
}

export default App
