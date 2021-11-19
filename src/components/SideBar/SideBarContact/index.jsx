import React, { useState } from 'react'
import UserIcon from '../../UserIcon'
import './SideBarContact.css'
import { useAppContext } from '../../../base/context'
import { fetchUser } from '../../../base/fetchData'

const SidebarContact = ({ uid, name, message, timeStamp, sender }) => {
  const [activeUser, setActiveUser] = useState(false)
  // const [{ uid }, dispatchUser] = useAppContext();

  const [{ user, senderUser }, dispatch] = useAppContext()
  const activeUserHandler = () => {
    setActiveUser(true)
    dispatch({
      type: 'SET_SENDER',
      payload: sender,
    })
  }

  const active = activeUser ? 'active' : ''
  return (
    <div
      style={{
        height: '100px',
        width: '100%',
        display: 'flex',
        marginTop: '10px',
        marginLeft: '10px',
        borderRadius: '10px',
      }}
      className={active}
      onClick={activeUserHandler}
    >
      <div style={{ width: '100%', display: 'flex', marginTop: '10px' }}>
        <div style={{ marginLeft: '10px' }}>
          <UserIcon src={user?.profile_pic} online={true} />
        </div>
        <div
          style={{
            marginLeft: '10px',
            display: 'flex',
            flexDirection: 'column',
            fontWeight: 'bold',
            color: activeUser ? 'black' : 'grey',
          }}
        >
          {name}
          <p style={{ fontWeight: 'normal' }}>
            {message.substring(0, 20) + ' ...'}
          </p>
        </div>
        <div>{timeStamp}</div>
      </div>
    </div>
  )
}

export default SidebarContact
