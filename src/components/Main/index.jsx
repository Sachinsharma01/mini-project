import React from 'react'
import "./Main.css"
import MessageCard from'../MessageCard'
const Main = ({array1}) => {
    var array = [
        {
            uid:'sender',
            time:'123',
            msg:'ram ram'
        },
        {
            uid:'me',
            time:'123.1',
            msg:'ram ram ji'
        },
        {
            uid:'sender',
            time:'124',
            msg:'kaisan baa'
        },
        {
            uid:'me',
            time:'125',
            msg:'thik ba'
        },
        {
            uid:'sender',
            time:'126',
            msg:'tuhar kaam kaisan chalat baani'
        },
        {
            uid:'me',
            time:'126',
            msg:'ek dam lalan top'
        }
    ]
    let textInput = React.createRef();
    const send=()=>{
        array.push({uid:'me', time:array[array.length-1].time+1, obj:textInput.current.value}) 
        window.location.reload(false);       
    }
    return (
        <div className='mainContainer'>
            {array.map(obj=>(
        <MessageCard  sender = {(obj.uid=='sender')?true:false} children={obj.msg}/>

            ))} 
            <div>
                <input type="text" ref={textInput} placeholder='enter msg' className='mainInput' />
                <button type='submit' onClick={send}>send</button>
            </div>           
        </div>
    )
}

export default Main
