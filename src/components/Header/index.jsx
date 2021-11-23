import React, { useEffect, useState } from 'react'
import UserIcon from '../UserIcon'
import ContactCard from '../ContactCard'
import ThreedotMenu, { ThreedotItem } from '../ThreedotMenu'
import './Header.css'
import { useAppContext } from '../../base/context'
import Auth from '../Authentication'
import { auth } from '../../base/firebase'

const Header = ({ setHamOpen, hamOpen }) => {
  const [showContactCard, setShowContactCard] = useState(false)
  const [{ user, senderUser }, dispatch] = useAppContext()

  useEffect(() => {
    if (localStorage.getItem('user')) {
      dispatch({
        type: 'SET_USER',
        payload: JSON.parse(localStorage.getItem('user')),
      })
    }
  }, [dispatch])

  return (
    <div className='header'>
      {!user && (
        <h1 style={{ color: '#fff', fontSize: '32px', fontWeight: '900' }}>
          ᑕᕼᗩ丅 ᐯᗴᖇᔕᗴ
        </h1>
      )}
      {user && (
        <>
          <div className={`header__currentUser ${hamOpen ? 'open' : ''}`}>
            <div style={{ display: 'flex' }}>
              <UserIcon src={user?.profile_pic} online={user?.available} />
              <h2>
                {user?.first_name} {user?.last_name}
              </h2>
            </div>
            <ThreedotMenu>
              <ThreedotItem onClick={() => {}}>Profile</ThreedotItem>
              <ThreedotItem onClick={() => {}}>Settings</ThreedotItem>
              <ThreedotItem
                onClick={() => {
                  auth.signOut()
                  localStorage.removeItem('user')
                  window.location.reload()
                }}
              >
                Logout
              </ThreedotItem>
            </ThreedotMenu>
          </div>
        </>
      )}
      <div
        style={{ position: 'absolute', left: `${!hamOpen ? '20px' : '80%'}` }}
        onClick={() => setHamOpen((prev) => !prev)}
      >
        <div className={`hamburger ${hamOpen ? 'open' : ''}`}>
          <span className='line'></span>
          <span className='line'></span>
          <span className='line'></span>
        </div>
      </div>
      <div className={`header__senderUser ${hamOpen ? 'open' : ''}`}>
        {senderUser && !hamOpen && (
          <div className='headerContactMenu'>
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
        )}
        {user && senderUser && !hamOpen && (
          <>
            <div style={{ display: 'flex', margin: '0 auto' }}>
              <UserIcon
                src={senderUser?.profile_pic}
                online={senderUser?.available}
              />
              <h2
                style={{
                  fontSize: '1.15rem',
                  marginLeft: '10px',
                  color: '#fff',
                }}
              >
                {senderUser?.first_name} {senderUser?.last_name}
              </h2>
            </div>
          </>
        )}
      </div>
      {!user && <Auth />}
    </div>
  )
}

export default Header
