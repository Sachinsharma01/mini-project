import React, { useState } from "react"
import UserIcon from '../UserIcon'
import ContactCard from '../ContactCard'
import ThreedotMenu, { ThreedotItem } from '../ThreedotMenu'
import "./Header.css"
import { useAppContext } from "../../base/context"

const Header = () => {
    const [showContactCard, setShowContactCard] = useState(false)
    const [{user, senderUser}] = useAppContext();

    const handleChange = () => {}

    return (
        <div className="header">
            <div className="header__currentUser">
                <div>
                    <UserIcon src={user.profile_pic} online={user.available}/>
                    <div className="currentUser__availability">
                        <h2>{user.userName}</h2>
                        <select onChange={handleChange}>
                            <option value={true} style={{backgroundColor: "green"}}>Online</option>
                            <option value={false} style={{backgroundColor: "gray"}}>Offline</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="header__senderUser">
                <div>
                    <UserIcon src={senderUser.profile_pic} online={senderUser.available}/>
                    <h2>{senderUser.userName}</h2>
                </div>
                <ThreedotMenu white>
                    <ThreedotItem onClick={()=>{setShowContactCard(true)}}>Contact Card</ThreedotItem>
                </ThreedotMenu>
            </div>  
            {showContactCard && <ContactCard setShowContactCard={setShowContactCard} senderUser={senderUser}/>}
      </div>
    )
}

export default Header
