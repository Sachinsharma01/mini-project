import React, { useState } from 'react'
import Login from './Login'
import Register from './Register'
import SideShow from './SideShow'
import './Authentication.css'

const LoginRegister = () => {
  const [slide, setSlide] = useState(true)

  return (
    <>
      <div className='AuthenticationPage'>
        <div className='authContain show'>
          <SideShow onClickSetSlide={() => setSlide((p) => !p)} slide={slide} />
          <div>{slide ? <Login /> : <Register />}</div>
        </div>
        <div className='authContain hide'>
          {slide ? (
            <Login setAuthPage={setSlide} />
          ) : (
            <Register setAuthPage={setSlide} />
          )}
        </div>
      </div>
    </>
  )
}
export default LoginRegister
