import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/navbar";
import Shop from "./pages/Shop/shop";
import ShopCategory from "./pages/ShopCategory/shopCategory";
import Product from "./pages/Product/product";
import Cart from "./pages/Cart/cart";
import LoginSignup from "./pages/LoginSignup/loginSignup";
import Footer from "./components/Footer/footer";

import banner_mens from './assets/banner_mens.png'
import banner_women from './assets/banner_women.png'
import banner_kids from './assets/banner_kids.png'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/mens" element={<ShopCategory banner = {banner_mens} category="men" />} />
        <Route path="/womens" element={<ShopCategory banner = {banner_women} category="women" />} />
        <Route path="/kids" element={<ShopCategory banner = {banner_kids} category="kid" />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product" element={<Product />}>
          <Route path=":productId" element={<Product />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/*" element={<h1>Oopse !! 🥹🥹</h1>} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;

// npm error code EINVALIDPACKAGENAME
// npm error Invalid package name "react- " of package "react- @^18.3.1": name cannot contain leading or trailing spaces; name can only contain URL-friendly characters.
// npm error A complete log of this run can be found in: C:\Users\msi2021\AppData\Local\npm-cache\_logs\2024-10-24T15_42_27_408Z-debug-0.log
