import React, { useEffect, useState } from 'react'
import UserIcon from '../UserIcon'
import ContactCard from '../ContactCard'
import ThreedotMenu, { ThreedotItem } from '../ThreedotMenu'
import './Header.css'
import { useAppContext } from '../../base/context'
import Auth from '../Authentication'
import { auth } from '../../base/firebase'

const Header = () => {
  const [showContactCard, setShowContactCard] = useState(false)
  const [showLogin, setShowLogin] = useState(false)
  const [signup, setSignup] = useState()
  const [{ user, senderUser }, dispatch] = useAppContext()

  useEffect(() => {
    if (localStorage.getItem('user')) {
      dispatch({
        type: 'SET_USER',
        payload: JSON.parse(localStorage.getItem('user')),
      })
    }
  }, [])

  const handleChange = (e) => {
    dispatch({
      type: 'SET_USER_AVAILABLE',
      payload: !!parseInt(e.target.value),
    })
  }

  return (
    <div className='header'>
      {user && (
        <>
          <div className='header__currentUser'>
            <div style={{ marginRight: '10em' }}>
              <UserIcon src={user?.profile_pic} online={user?.available} />
              <div className='currentUser__availability'>
                <h2>{user?.user_name}</h2>
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
      <div className='header__senderUser'>
        {!user && (
          <div
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-evenly',
            }}
          >
            <h2
              className='header__auth'
              onClick={() => {
                setSignup(true)
                setShowLogin(true)
              }}
            >
              Login
            </h2>
            <h2
              className='header__auth'
              onClick={() => {
                setSignup(false)
                setShowLogin(true)
              }}
            >
              Signup
            </h2>
          </div>
        )}
        {user && senderUser && (
          <>
            <div>
              <UserIcon
                src={senderUser?.profile_pic}
                online={senderUser?.available}
              />
              <h2>
                {senderUser?.first_name} {senderUser?.last_name}
              </h2>
            </div>
          </>
        )}
      </div>
      {!user && showLogin && <Auth state={signup} />}
      {senderUser && (
        <>
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
        </>
      )}
    </div>
  )
}

export default Header
