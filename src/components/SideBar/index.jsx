import React, { useEffect, useState } from 'react'
import './Sidebar.css'
import { useAppContext } from '../../base/context'
import ContactBox from './ContactBox'
import SearchBox from './SearchBox'
import { AiOutlineUser, AiOutlineSearch } from 'react-icons/ai'

const Sidebar = ({ setSearchNew }) => {
  const [{ senderUser }, dispatch] = useAppContext()
  const [selectedUser, setSelectedUser] = useState(senderUser)
  const [contactBox, setContactBox] = useState(true)

  useEffect(() => {
    dispatch({
      type: 'SET_SENDER',
      payload: selectedUser,
    })
  }, [selectedUser, setSelectedUser])

  return (
    <>
      <div className='relations'>
        {contactBox ? (
          <ContactBox
            selectedUser={selectedUser}
            setSelectedUser={setSelectedUser}
            setSearchNew={setSearchNew}
          />
        ) : (
          <SearchBox
            selectedUser={selectedUser}
            setSelectedUser={setSelectedUser}
            setSearchNew={setSearchNew}
          />
        )}
        <div className='sidebar__footer'>
          <AiOutlineUser
            className={`userIcon ${contactBox && 'active'}`}
            onClick={() => setContactBox(true)}
          />
          <AiOutlineSearch
            className={`searchIcon ${!contactBox && 'active'}`}
            onClick={() => setContactBox(false)}
          />
        </div>
      </div>
    </>
  )
}

export default Sidebar
