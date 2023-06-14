import React from "react";
import "./ChatHowToResponse.css"

function ChatHowToResponse({howTo}) {
  return (
    <div className="chat_how_to_response">
      <h4 className="chat_how_to_response_heading">How To:</h4>
      <div className="chat_how_to_response_content" dangerouslySetInnerHTML={{ __html: howTo }} />
    </div>
  );
}

export default ChatHowToResponse;
