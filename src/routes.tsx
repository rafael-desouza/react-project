import React from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProductsList from 'components/ProductsList'
import CartList from 'components/CartList'

const MainRoutes = () => {
  return (
    <div>
      <main>
        <Router>
          <Routes>
            <Route path="/" element={<ProductsList />} />
            <Route path="/cart" element={<CartList />} />
          </Routes>
        </Router>
      </main>
    </div>
  )
}

export default MainRoutes
