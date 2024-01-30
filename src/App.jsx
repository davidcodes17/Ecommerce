import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ProductPage from './pages/ProductPage'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Cart from './pages/Cart'
import SpecificCategory from './layouts/SpecificCategory'

const App = () => {
  return (
    <Routes>
      <Route path='/home' element={<Home />}></Route>
      <Route path='/product/:id' element={<ProductPage />}></Route>
      <Route path='/products/:category' element={<SpecificCategory />}></Route>
      <Route path='/' element={<Login />}></Route>
      <Route path='/signup' element={<SignUp />}></Route>
      <Route path='/cart' element={<Cart />}></Route>
    </Routes>
  )
}

export default App