import "./navbar.css";

import React, { useContext, useState } from "react";
import logo from "../../assets/logo.png";
import cart_icon from "../../assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const value_count = (num) => {
    if (num >= 9) {
      return "+9";
    } else return num;
  };

  return (
    <nav>
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>

      <ul className="nav-menu">
        <li
          onClick={() => setMenu("shop")}
          className={menu === "shop" ? "active" : ""}
        >
          <Link to={"/"}>Shop</Link>
        </li>
        <li
          onClick={() => setMenu("men")}
          className={menu === "men" ? "active" : ""}
        >
          <Link to={"/mens"}>Men</Link>
        </li>
        <li
          onClick={() => setMenu("women")}
          className={menu === "women" ? "active" : ""}
        >
          <Link to={"/womens"}>Women</Link>
        </li>
        <li
          onClick={() => setMenu("kids")}
          className={menu === "kids" ? "active" : ""}
        >
          <Link to={"/kids"}>Kids</Link>
        </li>
      </ul>
      <div className="nav-logo-cart">
        <Link to={"/login"}>
          <button>Login</button>
        </Link>
        <Link to={"/cart"}>
          <img src={cart_icon} alt="" />
        </Link>
        <small className="nav-cart-count">
          {value_count(getTotalCartItems())}
        </small>
      </div>
    </nav>
  );
};

export default Navbar;
