import React, { useEffect, useState } from 'react'
import UserIcon from '../../UserIcon'
import './SideBarContact.css'
import { useAppContext } from '../../../base/context'

const SidebarContact = ({ active, name, message, sender, setSelected }) => {
  const [{ user }] = useAppContext()

  const activeUserHandler = () => {
    setSelected(sender)
  }

  const activeBlue =
    active && active?.uid === sender?.uid ? 'activeSidebar' : ''
  return (
    <div
      className={`${activeBlue}`}
      style={{ marginTop: '10px' }}
      onClick={activeUserHandler}
    >
      <div className='contactSidebarCard '>
        <div>
          <UserIcon src={user?.profile_pic} online={true} />
        </div>
        <div
          style={{
            marginLeft: '10px',
            display: 'flex',
            flexDirection: 'column',
            fontWeight: 'bold',
          }}
        >
          {name}
          <p style={{ fontWeight: 'normal' }}>
            {message?.length > 30
              ? message?.substring(0, 30) + ' ...'
              : message}
          </p>
        </div>
      </div>
    </div>
  )
}

export default SidebarContact
