import React, { useEffect } from 'react'
import { useAppContext } from '../../base/context'
import Header from '../Header'
import Main from '../Main'
import Sidebar from '../SideBar'

const App = () => {
  const [{ user, senderUser }] = useAppContext()

  return (
    <>
      <Header />
      <div style={{ display: 'flex' }}>
        <div style={{ width: '22.5%' }}>{user && <Sidebar />}</div>
        <div style={{ width: '77.5%' }}>{user && senderUser && <Main />}</div>
      </div>
    </>
  )
}

export default App
