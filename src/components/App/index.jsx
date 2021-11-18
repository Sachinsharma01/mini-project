import React from 'react'
import { useAppContext } from '../../base/context'
import Header from '../Header'
import Main from '../Main'
import Sidebar from '../SideBar'

const App = () => {
  const [{ user }] = useAppContext()
  return (
    <>
      <Header />
      <div>
        {user && <Sidebar />}
        <Main />
      </div>
    </>
  )
}

export default App
