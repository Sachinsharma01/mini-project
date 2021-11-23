import React, { useEffect, useMemo, useState } from 'react'
import './Main.css'
import MessageCard from '../MessageCard'
import { fetchMessages } from '../../base/fetchData'
import { useAppContext } from '../../base/context'
import ChatInput from '../ChatInput'
import { pushMessage, pushRelation } from '../../base/pushData'

const Main = ({ searchNew, hamOpen }) => {
  const [{ user, senderUser }, dispatch] = useAppContext()
  const [newmsg, setnewmsg] = useState([])

  const uids = useMemo(
    () => [user?.uid.toString(), senderUser?.uid.toString()],
    [user?.uid, senderUser?.uid]
  )
  uids.sort()

  useEffect(() => {
    fetchMessages(uids[1], uids[0], dispatch, setnewmsg)
  }, [senderUser, dispatch, uids])

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
    <div className={`mainContainer ${hamOpen ? 'open' : ''}`}>
      {newmsg.map((obj, index) => {
        if (obj) {
          return (
            <MessageCard key={index} sender={obj?.sender === user?.uid}>
              {obj?.msg}
            </MessageCard>
          )
        } else {
          return ''
        }
      })}
      {!hamOpen && <ChatInput handleClick={handlePushMessage} />}
    </div>
  )
}
export default Main
