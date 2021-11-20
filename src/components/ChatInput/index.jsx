import React, { useState } from 'react'
import './ChatInput.css'
import { IoSend } from 'react-icons/io5'

const ChatInput = ({ handleClick }) => {
  const [value, setValue] = useState('')

  return (
    <div className='input'>
      <input
        type='text'
        placeholder='Type a message..'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></input>
      <button
        onClick={() => {
          handleClick(value)
          setValue('')
        }}
      >
        <IoSend className='sendIcon'></IoSend>
      </button>
    </div>
  )
}

export default ChatInput
