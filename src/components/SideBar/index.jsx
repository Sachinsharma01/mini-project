import React, { useEffect, useState } from 'react'
import './Sidebar.css'
import SidebarContact from './SideBarContact'
import { fetchRelations } from '../.././base/fetchData'
import { useAppContext } from '../../base/context'

const Sidebar = () => {
  const [{ user, relations, senderUser }, dispatch] = useAppContext()
  const [selectedUser, setSelectedUser] = useState(senderUser)

  useEffect(() => {
    fetchRelations(user, dispatch)
  }, [])

  useEffect(() => {
    dispatch({
      type: 'SET_SENDER',
      payload: selectedUser,
    })
    console.log(selectedUser)
  }, [selectedUser, setSelectedUser])

  return (
    <div className='relations'>
      {relations?.map((relation, index) => (
        <SidebarContact
          active={selectedUser}
          sender={relation}
          setSelected={setSelectedUser}
          key={index}
          uid={relation?.uid}
          name={relation?.first_name}
          message='hello there!!'
          timestamp='2:56'
        />
      ))}
    </div>
    // <div className="relations">
    //   {relations?.map((relation, index) => (
    //     <SidebarContact
    //       key={index}
    //       name={relation?.first_name}
    //       message="hello there!!"
    //       timeStamp="2:56"
    //     />
    //   ))}
    // </div>
  )
}

export default Sidebar
