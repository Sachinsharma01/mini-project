import React, { useState } from 'react'
import { useAppContext } from '../../base/context'
import Header from '../Header'
import Main from '../Main'
import Sidebar from '../SideBar'

const App = () => {
  const [{ user, senderUser }] = useAppContext()
  const [searchNew, setSearchNew] = useState(false)
  const [hamOpen, setHamOpen] = useState(false)

  return (
    <>
      <Header hamOpen={hamOpen} setHamOpen={setHamOpen} />
      <div style={{ display: 'flex' }}>
        {user && (
          <Sidebar
            hamOpen={hamOpen}
            setHamOpen={setHamOpen}
            setSearchNew={setSearchNew}
          />
        )}
        {user && senderUser && (
          <Main
            hamOpen={hamOpen}
            searchNew={searchNew}
            setSearchNew={setSearchNew}
          />
        )}
      </div>
    </>
  )
}

export default App
