import React from 'react'
import './ChatInput.css'
import { IoSend } from 'react-icons/io5';


const ChatInput = () => {
    return (
        <div className="input">
            <input type="text" placeholder="Type a message.."></input>
            <button type="submit">
                <IoSend className="sendIcon"></IoSend>
            </button>
        </div>
    )
}

export default ChatInput
