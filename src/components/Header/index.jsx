import React, { useState } from 'react'
import UserIcon from '../UserIcon'
import ContactCard from '../ContactCard'
import ThreedotMenu, { ThreedotItem } from '../ThreedotMenu'
import './Header.css'
import { useAppContext } from '../../base/context'

const Header = () => {
  const [showContactCard, setShowContactCard] = useState(false)
  const [{ user, senderUser }, dispatch] = useAppContext()

  const handleChange = (e) => {
    dispatch({
      type: 'SET_USER_AVAILABLE',
      payload: !!parseInt(e.target.value),
    })
  }

  return (
    <div className='header'>
      <div className='header__currentUser'>
        <div style={{ marginRight: '10em' }}>
          <UserIcon src={user?.profile_pic} online={user?.available} />
          <div className='currentUser__availability'>
            <h2>{user?.userName}</h2>
            <select onChange={(e) => handleChange(e)}>
              <option value={1} style={{ backgroundColor: 'green' }}>
                Online
              </option>
              <option value={0} style={{ backgroundColor: 'gray' }}>
                Offline
              </option>
            </select>
          </div>
        </div>
        <ThreedotMenu>
          <ThreedotItem onClick={() => {}}>Profile</ThreedotItem>
          <ThreedotItem onClick={() => {}}>Settings</ThreedotItem>
          <ThreedotItem onClick={() => {}}>Logout</ThreedotItem>
        </ThreedotMenu>
      </div>
      <div className='header__senderUser'>
        <div>
          <UserIcon
            src={senderUser?.profile_pic}
            online={senderUser?.available}
          />
          <h2>{senderUser?.userName}</h2>
        </div>
      </div>
      <ThreedotMenu white>
        <ThreedotItem
          onClick={() => {
            setShowContactCard(true)
          }}
        >
          Contact Card
        </ThreedotItem>
      </ThreedotMenu>
      {showContactCard && (
        <ContactCard
          setShowContactCard={setShowContactCard}
          senderUser={senderUser}
        />
      )}
    </div>
  )
}

export default Header
