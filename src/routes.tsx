import Loading from 'components/UI/Loading'
import React, { Suspense } from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const CartList = React.lazy(() => import('components/CartList'))
const ProductsList = React.lazy(() => import('components/ProductsList'))

const MainRoutes = () => {
  return (
    <div>
      <main>
        <Suspense fallback={<Loading />}>
          <Router>
            <Routes>
              <Route path="/" element={<ProductsList />} />
              <Route path="/cart" element={<CartList />} />
            </Routes>
          </Router>
        </Suspense>
      </main>
    </div>
  )
}

export default MainRoutes
