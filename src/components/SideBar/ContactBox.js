import React, { useEffect } from 'react'
import SidebarContact from './SideBarContact'
import './Sidebar.css'
import { fetchRelations } from '../.././base/fetchData'
import { useAppContext } from '../../base/context'

const ContactBox = ({ setSelectedUser, selectedUser, setSearchNew }) => {
  const [{ user, relations }, dispatch] = useAppContext()

  useEffect(() => {
    fetchRelations(user, dispatch)
  }, [])

  return (
    <>
      {relations?.map((relation, index) => {
        if (relation.uid) {
          return (
            <div onClick={() => setSearchNew(false)}>
              <SidebarContact
                active={selectedUser}
                sender={relation}
                setSelected={setSelectedUser}
                key={index}
                name={`${relation?.first_name} ${relation?.last_name}`}
                message={relation?.user_name}
              />
            </div>
          )
        }
      })}
    </>
  )
}

export default ContactBox
