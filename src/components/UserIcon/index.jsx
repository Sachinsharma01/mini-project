import React from 'react'
import "./UserIcon.css"

const UserIcon = ({size, online, src, username}) => {
    let dim = "";

    const onlineColor = online ? "#00ff00" : "#777777"
    const blankUser = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"

    switch (size) {
        case "large": dim = "200px"
        break
        case "small": dim = "60px"
        break
        default: dim = "80px"
    }

    return (
        <div className="userIcon">
            <img className="userIcon__image" src={src ? src : blankUser} style={{height: `${dim}`, width: `${dim}`}} alt={username}/>      
            <div className="userIcon__online" style={{backgroundColor: `${onlineColor}`}}></div>
        </div>
    )
}

export default UserIcon
