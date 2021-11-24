import React from 'react'
import './Authentication.css'
//live share ext-
function SideShow(props) {
  return (
    <div className='side'>
      <p className='authtext'>
        Experience the best connections with your friends and family.
      </p>
      <img className='authImg' src='./mini.JPG' alt='authImg' />
      <div className='btndiv'>
        <button className='authbutton trnsisn' onClick={props.onClickSetSlide}>
          {!props.slide
            ? 'Login, if already registered.'
            : "Don't have an account, register"}
        </button>
      </div>
    </div>
  )
}
export default SideShow
