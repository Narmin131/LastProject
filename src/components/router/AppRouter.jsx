import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "../pages/common/Nav";
import Footer from "../pages/common/Footer";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Cart from "../pages/Cart";
import Login from "../pages/Signin";
import Blogs from "../pages/Blogs";
import Shop from "../pages/Shop";
import WishList from "../pages/Wishlist";
import Search from "../pages/Search";
import { CartProvider } from "react-use-cart";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { useSelector } from "react-redux";

const AppRouter = () => {
  const [user, setUser] = useState({
    username: "Narmin",
    password: "narmin123",
  });

  const wishlist = useSelector((state) => state.wishlist);

  useEffect(() => {
    localStorage.setItem("Wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  return (
    <BrowserRouter>
      <CartProvider>
        <ToastContainer pauseOnHover={false} autoClose={1000} />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route
            path="/login"
            element={<Login user={user} setUser={setUser} />}
          ></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/blogs" element={<Blogs />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/wishlist" element={<WishList />}></Route>
        </Routes>
      </CartProvider>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
