import React, { useState } from "react";
import { Sidebar } from "primereact/sidebar";
import demoWishlist from "../../assets/images/demo-wishlist.webp";
import demo2 from "../../assets/images/wishlist-demo-1.webp";
import { Image } from "primereact/image";
import "./cart.css";

const initialData = [
  {
    id: 1,
    title: "Vama Set without dupatta - S",
    size: "S",
    price: "₹6,221.00",
    image: demoWishlist,
  },
  {
    id: 2,
    title: "HEATHER SUIT SET - S",
    size: "M",
    price: "₹3,671.00",
    image: demo2,
  },
];

const Cart = (props) => {
  const [cartItems, setCartItems] = useState(initialData);
  return (
    <div>
      <Sidebar
        visible={props.visibleRight}
        position="right"
        onHide={() => props.setVisibleRight(!props.visibleRight)}
        showCloseIcon={false}
        style={{ width: "300px" }}
      >
        <div className="cart-data">
          <div className="cart-header">
            <span className="cart-name">CART</span>
            <i
              className="pi pi-times"
              onClick={() => props.setVisibleRight(!props.visibleRight)}
            ></i>
          </div>
          {cartItems ? (
            cartItems.map((data) => (
              <div className="cart-items" key={data.id}>
                <div className="item-image">
                  <Image src={data.image} alt="LOGO" width={100} />
                </div>
                <div className="item-details">
                  <div className="main-header">
                    <div className="item-header">{data.title}</div>
                    <div className="item-size">Size: {data.size}</div>
                  </div>
                  <div className="price-count">
                    <div className="item-counter">Q - 1</div>
                    <div className="item-price">{data.price}</div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="cart-empty">there are no items in this cart</p>
          )}
        </div>
        <div className="botton-checkout">
          <div className="total-price">
            <div className="total">SUBTOTAL</div>
            <div className="price">Rs. 3,671.00</div>
          </div>
          <div className="checkout">
            <button type="submit" className="btn-checklist">
              CHECK OUT
            </button>
          </div>
        </div>
      </Sidebar>
    </div>
  );
};

export default Cart;
