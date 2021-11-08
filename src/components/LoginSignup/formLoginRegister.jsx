import React from "react";
import { useState } from "react/cjs/react.development";
import Login from "./login";
import Register from "./register";
import './style.css'
const LoginRegister=()=>{
    const [slide, setSlide] = useState(false)
    return(
        <div className='contain'>
            <div className='side'>
            <p className='text'>Experience the best connections with your friends and family.</p>
            <img src="./mini.JPG" alt="" />
            <div className='btndiv'>
            <button className='change' onClick={()=>{
                if(slide){
                setSlide(false)}
                else{
                setSlide(true)}
            }} >{!slide?'Login if already registered.':"Don't have an account.Register please."}</button>
            </div>
        </div>
            <div>{slide?< Login/>:< Register/>}</div>
        </div>
    )
}
export default LoginRegister
