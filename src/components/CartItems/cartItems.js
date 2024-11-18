
import "./cartItems.css";

import React, { useContext } from "react";
import remove_icon from "../../assets/cart_cross_icon.png";
import all_product from "../../assets/all_product";
import { ShopContext } from "../../context/ShopContext";

const CartItems = () => {
  const { getTotalCartAmount, addToCart, cartItems, removeFromCart } = useContext(ShopContext);

  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quanitity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />

      {all_product.map((item, index) => {
        if (cartItems[item.id] > 0) {
          return (
            <div>
              <div className="cartitems-format cartitems-format-main">
                <img src={item.image} className="carticon-product-icon" alt="" />
                <p>{item.name}</p>
                <p>{item.new_price}</p>
                <button className="cartitems-quantity">{cartItems[item.id]}</button>
                <p>{item.new_price * cartItems[item.id]}</p>
                <img
                  src={remove_icon}
                  onClick={() => removeFromCart(item.id)}
                  alt=""
                  className="carticon-remove-icon"
                />
              </div>
              <hr />
            </div>
          );
        } 
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>SubTotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>

          <button>PROCEED TO CHECKOUT</button>

        </div>
        <div className="cartitems-promocode">
          <p>If you have a promo code, Enter it here</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder="promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
