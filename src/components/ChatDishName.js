import React from 'react'
import "./ChatDishName.css"

function ChatDishName({dishName}) {
  return (
    <div className="chat_name_response">
      <div className="chat_name_response_heading">DishName : </div>
      <div className="chat_name_response_content" dangerouslySetInnerHTML={{ __html: dishName }} />
    </div>
  )
}

export default ChatDishName
