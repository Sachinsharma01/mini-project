import React from 'react'
import "./MessageCard.css"

const MessageCard = ({children, me, sender}) => {
    return (
        <div style={{position: "relative"}}>
            {sender && (
                <div className="message__sender">
                    {children}
                </div>
            )}
            {me && (
                <div className="message__me">
                    {children}
                </div>
            )}
        </div>
    )
}

export default MessageCard
