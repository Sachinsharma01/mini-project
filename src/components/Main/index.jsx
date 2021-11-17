import React, { useEffect, useState } from 'react'
import "./Main.css"
import MessageCard from'../MessageCard'
import { fetchMessages } from '../../base/fetchData'
import {useAppContext} from '../../base/context'

const Main = () => {
    const arr = []
    const [{messages, user}, dispatch] = useAppContext()
    useEffect(()=>{
        fetchMessages('admin','vipin',dispatch)
    },[])
    const [newmsg, setnewmsg] = useState([])
    useEffect(()=>{
        setnewmsg((prev)=>[...prev, messages])
    },[messages])
    console.log(newmsg);
    const array=[]
    let textInput = React.createRef();
    const send=()=>{
        array.push({uid:'me', time:array[array.length-1].time+1, obj:textInput.current.value}) 
        window.location.reload(false);       
    }
    return (
        <div className='mainContainer'>
            {newmsg.map(obj=>{
                if(obj[0]){
                    return(
                        <MessageCard  sender = {obj[0]?.msg.sender=='admin'} children={obj[0]?.msg.msg}/>
                       )
                }
})} 
            <div>
                <input type="text" ref={textInput} placeholder='enter msg' className='mainInput' />
                <button type='submit' onClick={send}>send</button>
            </div>           
        </div>
    )
}

export default Main
