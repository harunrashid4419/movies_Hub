import React from "react";
import "./Cart.css";
import protectionImage from "../../../assets/protection.png";

const Cart = () => {
  const carts = [
    {
      id: 1,
      img: "https://i.ibb.co/L0WZN4v/cart-image1.png",
      month: "1",
      price: "9.99",
    },
    {
      id: 2,
      img: "https://i.ibb.co/TKZGWBd/cart-image2.png",
      month: "12",
      price: "19.99",
      save: "68%",
      oldPrice: "158.99",
      twoYear: "112.99",
    },
    {
      id: 3,
      img: "https://i.ibb.co/tcw8msD/cart-image3.png",
      month: "6",
      price: "14.99",
    },
  ];
  return (
    <div className="main-cart">
      <div className="container">
        <p>START SECURE BROWSING</p>
        <h2>Ready to Grab the Deal?</h2>
        <div className="cart-section">
          {carts?.map((cart) => (
            <div className="single-cart">
              <img src={cart?.img} alt="Device images" />
              <p>{cart?.month} -month plan</p>
              <h1>
                <span className="dolar">$</span>
                {cart?.price}
              </h1>
              <p className="month">per month</p>
              {cart?.save && <p className="save">{cart?.save}</p>}
              {cart?.oldPrice && cart?.twoYear && (
                <p className="extra-price">
                  <s>${cart?.oldPrice}</s> <span>${cart?.twoYear}</span> for the
                  first 2 years
                </p>
              )}
              <button>get the dell</button>
              <div className="protection">
                <img src={protectionImage} alt="protectionImage" />
                <p>30-days money-back guarantee</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
