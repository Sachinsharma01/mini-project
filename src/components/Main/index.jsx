import React, { useEffect, useState } from 'react'
import './Main.css'
import MessageCard from '../MessageCard'
import { fetchMessages } from '../../base/fetchData'
import { useAppContext } from '../../base/context'
import ChatInput from '../ChatInput'
import { pushMessage, pushRelation } from '../../base/pushData'

const Main = ({ searchNew }) => {
  const [{ user, senderUser }, dispatch] = useAppContext()
  const [newmsg, setnewmsg] = useState([])

  const uids = [user?.uid.toString(), senderUser?.uid.toString()]
  uids.sort()

  useEffect(() => {
    fetchMessages(uids[1], uids[0], dispatch, setnewmsg)
  }, [senderUser])

  useEffect(() => {
    setnewmsg([])
  }, [senderUser])

  const handlePushMessage = (msg) => {
    if (searchNew) {
      pushRelation(user, senderUser)
    }
    pushMessage(msg, uids[0], uids[1], senderUser)
  }

  return (
    <div className='mainContainer'>
      {newmsg.map((obj) => {
        if (obj) {
          return (
            <MessageCard sender={obj?.sender !== user?.uid}>
              {obj?.msg}
            </MessageCard>
          )
        }
      })}
      <ChatInput handleClick={handlePushMessage} />
    </div>
  )
}
export default Main
