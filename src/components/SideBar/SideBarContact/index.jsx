import React, { useEffect, useState } from 'react'
import UserIcon from '../../UserIcon'
import './SideBarContact.css'
import { useAppContext } from '../../../base/context'

const SidebarContact = ({
  active,
  uid,
  name,
  message,
  timeStamp,
  sender,
  setSelected,
}) => {
  const [{ user, senderUser }, dispatch] = useAppContext()

  const activeUserHandler = () => {
    setSelected(sender)
  }

  const activeBlue = active && active?.uid === sender?.uid ? 'active' : ''
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
      className={activeBlue}
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
            // color: activeUser ? 'black' : 'grey',
          }}
        >
          {name}
          <p style={{ fontWeight: 'normal' }}>
            {message?.substring(0, 20) + ' ...'}
          </p>
        </div>
        <div>{timeStamp}</div>
      </div>
    </div>
  )
}

export default SidebarContact
