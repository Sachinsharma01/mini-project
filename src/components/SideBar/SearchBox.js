import React, { useState } from 'react'
import './Sidebar.css'
import SidebarContact from './SideBarContact'
import { fetchSearchResults } from '../.././base/fetchData'

const SearchBox = ({ setSelectedUser, selectedUser, setSearchNew }) => {
  const [queryData, setQueryData] = useState([])
  const [query, setQuery] = useState('')

  return (
    <>
      <div>
        <input value={query} onChange={(e) => setQuery(e.target.value)} />
        <button onClick={() => fetchSearchResults(query, setQueryData)}>
          Search
        </button>
      </div>
      {queryData.map((data, index) => {
        return (
          <div
            onClick={() => {
              setSearchNew(true)
              setQuery('')
            }}
          >
            <SidebarContact
              active={selectedUser}
              sender={data}
              onClickSearch={() => {}}
              setSearchNew={setSearchNew}
              setSelected={setSelectedUser}
              key={index}
              uid={data?.uid}
              name={data?.first_name}
            />
          </div>
        )
      })}
    </>
  )
}

export default SearchBox
