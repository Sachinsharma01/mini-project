import React from 'react'
import Header from '../Header'
import Main from '../Main'
import Sidebar from '../SideBar'

const App = () => {
    return (
        <>
        <Header />
        <div>
            <Sidebar />
            <Main />
        </div>
        </>
    )
}

export default App;