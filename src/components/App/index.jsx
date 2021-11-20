import React, { useEffect, useState } from 'react'
import { useAppContext } from '../../base/context'
import Header from '../Header'
import Main from '../Main'
import Sidebar from '../SideBar'

const App = () => {
  const [{ user, senderUser }] = useAppContext()
  const [searchNew, setSearchNew] = useState(false)

  return (
    <>
      <Header />
      <div style={{ display: 'flex' }}>
        <div style={{ width: '22.5%' }}>
          {user && <Sidebar setSearchNew={setSearchNew} />}
        </div>
        <div style={{ width: '77.5%' }}>
          {user && senderUser && (
            <Main searchNew={searchNew} setSearchNew={setSearchNew} />
          )}
        </div>
      </div>
    </>
  )
}

export default App
