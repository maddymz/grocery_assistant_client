import React from 'react'
import "./ChatIngredientsResponse.css"

function ChatIngredientsResponse({requiredQuantity}) {
  return (
    <div className="chat_ingredients_response">
      <h4 className="chat_ingredients_response_heading" >Ingredients Required:</h4>
      <div  className="chat_ingredients_response_table" dangerouslySetInnerHTML={{ __html: requiredQuantity }} />
    </div>
  )
}

export default ChatIngredientsResponse
