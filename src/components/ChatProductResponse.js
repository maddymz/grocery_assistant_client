import React from "react";
import ChatProduct from "./ChatProduct";
import "./ChatProductResponse.css"

function ChatProductResponse({ itemResult }) {
  return (
    <div className="chat_product_response">
      <h3 className="chat_product_response_heading">
        Would you like to add these ingredients to cart ?
      </h3>
      {itemResult.map((product, idx) => (
        
        <ChatProduct
          key={idx}
          id={product.itemId}
          title={product.name}
          price={product.price}
          image={product.image}
          rating={product.rating}
        />
      ))}
    </div>
  );
}

export default ChatProductResponse;
