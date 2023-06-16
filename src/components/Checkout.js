import React from "react";
import "./Checkout.css";
import checkoutBanner from "../assets/supermarket-banner1.jpeg";
import Subtotal from "./Subtotal";
import { useStateValue } from "../service/StateProvider";

import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const[{basket,user }, dispach] = useStateValue(); 

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img className="checkout__ad" src={checkoutBanner} alt=""></img>
        <div>
          <h3 className="checkout__user_title">Hello {user?.email} </h3>
          <h2 className="checkout__title"> Shopping Basket</h2>
          {basket.map((itm, idx)=> (<CheckoutProduct
                id={itm.id} title={itm.title} price={itm.price} image={itm.image} rating={itm.rating} key={idx}
          />))}

        </div>
      </div>
      <div className="checkout__right">
        <Subtotal/>
      </div>
    </div>
  );
}

export default Checkout;
