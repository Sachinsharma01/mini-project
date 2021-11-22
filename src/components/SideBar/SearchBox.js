import React, { useState } from 'react'
import './Sidebar.css'
import SidebarContact from './SideBarContact'
import { fetchSearchResults } from '../.././base/fetchData'
import { AiOutlineSearch } from 'react-icons/ai'

const SearchBox = ({ setSelectedUser, selectedUser, setSearchNew }) => {
  const [queryData, setQueryData] = useState([])
  const [query, setQuery] = useState('')

  return (
    <>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          margin: '20px',
          justifyContent: 'space-evenly',
        }}
      >
        <input
          class='searchInput'
          placeholder='Enter user name'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <AiOutlineSearch
          className={`searchIcon`}
          onClick={() => fetchSearchResults(query, setQueryData)}
        />
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
