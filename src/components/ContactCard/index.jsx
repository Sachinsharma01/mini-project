import React from 'react'
import UserIcon from '../UserIcon'
import {useAppContext} from "../../base/context"
import "./ContactCard.css"
import { IoCloseCircle } from 'react-icons/io5'
import { BiBlock } from 'react-icons/bi'
import { MdDeleteOutline } from 'react-icons/md'




const ContactCard = ({setShowContactCard}) => {
    const [{senderUser}] = useAppContext();

    return (
        <div className="contactCard">
            <div onClick={() => setShowContactCard(false)}><IoCloseCircle className="closeButton" /></div>
            <div className="contactCard-name">Contact Info</div>
            <div className="contactCard__userInfo">
                <div>
                <UserIcon src={senderUser.profile_pic} size="large"/>
                </div>
                <h1 className="userName">{senderUser.userName}</h1>
                <div className={`contactCard__available ${senderUser.available ? "green" : ""}`}>{senderUser.available ? "Available" : "Offline"}</div>
            </div>
            <div className="contactCard__buttons">
                <button className="blockContact" onClick={()=>{}}><BiBlock /> Block Contact</button>
                <button className="deleteChat" onClick={()=>{}}><MdDeleteOutline /> Delete Chat</button>
            </div>
        </div>
    )
}

export default ContactCard
