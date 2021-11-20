import React, { useEffect, useState } from 'react'
import './Sidebar.css'
import SidebarContact from './SideBarContact'
import { fetchRelations, fetchSearchResults } from '../.././base/fetchData'
import { useAppContext } from '../../base/context'

const Sidebar = ({ setSearchNew }) => {
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
  }, [selectedUser, setSelectedUser])

  const [query, setQuery] = useState('')
  const [queryData, setQueryData] = useState([])

  return (
    <div className='relations'>
      {relations?.map((relation, index) => (
        <div onClick={() => setSearchNew(false)}>
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
        </div>
      ))}
      <div>
        <input value={query} onChange={(e) => setQuery(e.target.value)} />
        <button onClick={() => fetchSearchResults(query, setQueryData)}>
          Search
        </button>
      </div>
      {queryData.map((data, index) => {
        return (
          <div onClick={() => setSearchNew(true)}>
            <SidebarContact
              active={selectedUser}
              sender={data}
              setSearchNew={setSearchNew}
              setSelected={setSelectedUser}
              key={index}
              uid={data?.uid}
              name={data?.first_name}
            />
          </div>
        )
      })}
    </div>
  )
}

export default Sidebar
