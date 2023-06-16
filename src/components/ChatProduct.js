import React, { useState } from 'react'
import "./ChatProduct.css"
import { useStateValue } from "../service/StateProvider";


function ChatProduct({id, title, image, price, rating }) {

const[{basket}, dispach] = useStateValue(); 
const [isAddedToBasket, setIsAddedToBasket] = useState(false);
const addToBasket = () => {
    dispach({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating
       }
    });
    setIsAddedToBasket(true);
  }


  return (
    <div className="chat_product" >
      <div className="chat_product__info">
        <p>{title}</p>
      </div>
      <img src={image} alt="" />
      <p className="chat_product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        {!isAddedToBasket && id !== 'NA' && (
        <button onClick={addToBasket}>Add to Basket</button>
      )}
      {isAddedToBasket && id !== 'NA' && (
         <p className="chat_product_added"><strong> Added</strong></p>
        
      )}
      {id == 'NA' && (
        <button className='chat_product__alt__btn' onClick={addToBasket}>Give Alternative</button>
      )}
    </div>
  )
}

export default ChatProduct
