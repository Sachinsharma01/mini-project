import React from "react";
import './Authentication.css'
//live share ext-
function SideShow(props){
   return(
    <div className='side'>
            <p className='text'>Experience the best connections with your friends and family.</p>
            <img src='./photo/mini.JPG' />
            <div className='btndiv'>
                <button className='button' onClick={props.onClickSetSlide} >{!props.slide?'Login if already registered.':"Don't have an account.Register"}</button>
            </div>
    </div>
    )
}
export default SideShow;