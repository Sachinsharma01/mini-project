import React, { useEffect, useState } from 'react'
import { useAppContext } from '../../base/context'
import Header from '../Header'
import Main from '../Main'
import Sidebar from '../SideBar'

const App = () => {
  const [{ user, senderUser }] = useAppContext()
  const [searchNew, setSearchNew] = useState(false)

  return (
    // <div
    //   style={{
    //     height: '100vh',
    //     backgroundImage: 'linear-gradient(to top, #a1b6eb, #edf6fc)',
    //   }}
    // >
    <>
      <Header />
      <div style={{ display: 'flex' }}>
        {user && <Sidebar setSearchNew={setSearchNew} />}
        {user && senderUser && (
          <Main searchNew={searchNew} setSearchNew={setSearchNew} />
        )}
      </div>
    </>
    // </div>
  )
}

export default App
