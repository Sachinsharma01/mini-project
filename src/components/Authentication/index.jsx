import React, {useState} from 'react';
import Login from "./Login";
import Register from "./Register";
import SideShow from './SideShow';
import './Authentication.css'

const LoginRegister=()=>{
    const [showAuth, setShowAuth] = useState(false);
    const onClickSetSlide = ()=>{
        if(slide){
        setSlide(false)}
        else{
        setSlide(true)}
    }
    const [slide, setSlide] = useState(false)
    return(
        <>
        <div className='AuthenticationPage'>
            <button onClick={()=>{setShowAuth((prev)=>!prev)}}>show</button>
            {showAuth && (<div className='contain'>
            <SideShow onClickSetSlide= {onClickSetSlide} slide = {slide}/>
            <div>{slide?< Login/>:< Register/>}</div>
            </div>)}
        </div>
        </>
    )
}
export default LoginRegister