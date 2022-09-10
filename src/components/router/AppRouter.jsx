import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "../pages/common/Nav";
import Footer from "../pages/common/Footer";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Register from "../pages/Register";
import Cart from "../pages/Cart";
import Signin from "../pages/Signin";
import Blogs from "../pages/Blogs";
import Shop from "../pages/Shop";
import { CartProvider } from "react-use-cart";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';
import {  Zoom } from 'react-toastify';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <ToastContainer pauseOnHover={false} autoClose={1000} transition={Zoom}/>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/signin" element={<Signin />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/blogs" element={<Blogs />}></Route>
        </Routes>
      </CartProvider>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
