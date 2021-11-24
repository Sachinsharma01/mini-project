import React, { useState } from 'react'
import Login from './Login'
import Register from './Register'
import SideShow from './SideShow'
import './Authentication.css'

const LoginRegister = ({ state }) => {
  const [slide, setSlide] = useState(true)
  const [authPage, setAuthPage] = useState(true)


  return (
    <>
      <div className='AuthenticationPage'>
        <div className='authContain show'>
          <SideShow 
          onClickSetSlide={() => setSlide((p) => !p)} slide={slide} />
          <div>{slide ? <Login /> : <Register/>}</div>
        </div>
        <div className='authContain hide'>
          {authPage ? <Login authPage={authPage} setAuthPage = {setAuthPage} /> : <Register authPage={authPage} setAuthPage = {setAuthPage} />}
        </div>
      </div>
    </>
  )
}
export default LoginRegister
