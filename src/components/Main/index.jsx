import React, { useEffect, useState } from 'react'
import './Main.css'
import MessageCard from '../MessageCard'
import { fetchMessages } from '../../base/fetchData'
import { useAppContext } from '../../base/context'

const Main = () => {
  const [{ messages, user, senderUser }, dispatch] = useAppContext()
  const [newmsg, setnewmsg] = useState([])

  useEffect(() => {
    const userId = user?.uid.toString()
    const senderId = senderUser?.uid.toString()
    fetchMessages(userId, senderId, dispatch)
  }, [])

  useEffect(() => {
    setnewmsg((prev) => {
      return [...prev, messages]
    })
  }, [messages])

  console.log(newmsg)

  return (
    <div className='mainContainer'>
      {newmsg.map((obj) => {
        if (obj[0]) {
          return (
            <MessageCard sender={obj[0]?.sender !== user?.uid}>
              {obj[0]?.msg}
            </MessageCard>
          )
        }
      })}
      <div>
        <input type='text' placeholder='enter msg' className='mainInput' />
        <button type='submit'>send</button>
      </div>
    </div>
  )
}
export default Main
