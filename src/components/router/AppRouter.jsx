import React from 'react'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import Nav from "../pages/common/Nav"
import Footer from "../pages/common/Footer"
import Home from "../pages/Home"
import About from '../pages/About'
import Contact from "../pages/Contact"
import Register from '../pages/Register'
import Cart from '../pages/Cart'
import Signin from "../pages/Signin"
import Blogs from '../pages/Blogs'
import Shop from '../pages/Shop'
import Admin from '../pages/Admin'
import { CartProvider } from "react-use-cart";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Nav />
        <CartProvider>
         <Routes>
         <Route  path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/signin' element={<Signin/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
          <Route path='/shop' element={<Shop/>}></Route>
          <Route path='/blogs' element={<Blogs/>}></Route>
         </Routes>
        </CartProvider>
      <Footer />
    </BrowserRouter>
  )
}

export default AppRouter