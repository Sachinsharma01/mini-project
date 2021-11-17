import React, { useState } from 'react'
import Login from './Login'
import Register from './Register'
import SideShow from './SideShow'
import './Authentication.css'

const LoginRegister = ({ state }) => {
  const [slide, setSlide] = useState(state)

  return (
    <>
      <div className='AuthenticationPage'>
        <div className='contain'>
          <SideShow onClickSetSlide={() => setSlide((p) => !p)} slide={slide} />
          <div>{slide ? <Login /> : <Register />}</div>
        </div>
      </div>
    </>
  )
}
export default LoginRegister
