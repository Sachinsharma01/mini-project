import React from 'react'
import "./ThreedotItem.css"

const ThreedotItem = ({onClick, children}) => {
    return (
        <div className="threeDotItem" onClick={onClick}>
            {children}
        </div>
    )
}

export default ThreedotItem
