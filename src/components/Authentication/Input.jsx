import React from "react";
import './Authentication.css';
const Input=({touched,errors, ...props})=>{
    return (
        <>
        <input {...props}
        className={'inp'} />        
        {(touched&&Boolean(errors)) ? (<div className='enab'> {errors}</div>) : ''}
        </>
        )
}
export default Input;