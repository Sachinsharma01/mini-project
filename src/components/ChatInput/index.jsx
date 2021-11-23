import React, { useState } from 'react'
import './ChatInput.css'
import { IoSend } from 'react-icons/io5'

const ChatInput = ({ handleClick }) => {
  const [value, setValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
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
            handleSubmit(e)
          }
        }}
      ></input>
      <button
        type='submit'
        onSubmit={(e) => {
          handleSubmit(e)
        }}
      >
        <IoSend className='sendIcon' />
      </button>
    </div>
  )
}

export default ChatInput
