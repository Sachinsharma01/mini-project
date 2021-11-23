import React, { useState } from 'react'
import './ChatInput.css'
import { IoSend } from 'react-icons/io5'

const ChatInput = ({ handleClick }) => {
  const [value, setValue] = useState('')

  const handleSubmit = () => {
    handleClick(value)
    setValue('')
  }

  return (
    <div className={`inputChat`}>
      <input
        type='text'
        placeholder='Type a message..'
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleSubmit()
          }
        }}
      ></input>
      <button type='button' onClick={handleSubmit}>
        <IoSend className='sendIcon' />
      </button>
    </div>
  )
}

export default ChatInput
